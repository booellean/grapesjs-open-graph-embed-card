import { readFileSync } from 'fs';
import { resolve } from 'path';

const PluginSettingsWithoutURL = require('../../plugin_settings');
PluginSettingsWithoutURL.pluginsOpts['grapesjs-open-graph-embed-card'] = {}
const PluginSettingsWithURL = {
    ...PluginSettingsWithoutURL,
    pluginsOpts : {
        'grapesjs-open-graph-embed-card' : {
            url : 'https://www.google.com'
        }
    }
}

const HTML = readFileSync(resolve(__dirname, '../../_index.html')).toString();

let instance, editor;
let url = 'https://booellean.itch.io/';

const initiateEditor = (settings, resolve) => {
    document.body.innerHTML = HTML;
    editor = global.grapesjs.init(settings)

    editor.Components.clear()

    editor.on('load', () =>{
        return resolve();
    })
}

/**
 * @jest-environment jsdom
 */

describe('Open Graph Embed Card', () => {

    beforeEach( async () => {
        return new Promise( resolve => {
            return initiateEditor(PluginSettingsWithURL, resolve);
        }).finally( () =>{
            instance = editor.getContainer();
        })
    
    })
    
    afterAll( () => {
        editor.destroy()
    });

    afterEach( () => {
        editor.Components.clear()
        global.alerts = []
    })

    it('renders an instance of the block in the editor', () =>{

        // editor initiated
        expect(instance.querySelector('div.gjs-editor > div.gjs-cv-canvas')).not.toBeNull();

        // OG Embed Block initiated
        expect(editor.Blocks.get('open-graph-card')).not.toBeNull();
        expect(editor.DomComponents.getType('open-graph-card')).not.toBeNull();

    });


    it('renders a default card to the canvas when added', () =>{
        let card = editor.addComponents({ type: 'open-graph-card' })
        let components = editor.Components.getComponents();

        expect(components.length).toBe(1)
        expect(components._byId[card[0].cid]).toBeTruthy();
    });

    it('will throw an error if the href attribute changes and there\'s no url for a parser', async () =>{
        await new Promise( resolve => {
            return initiateEditor(PluginSettingsWithoutURL, resolve);
        })

        let card = editor.addComponents({ type: 'open-graph-card' })[0];

        let attributes = card.getAttributes();
        let attrs = {
            ...attributes,
            href: url
        };

        card.setAttributes(attrs)
        await new Promise(process.nextTick);

        let new_attrs = card.getAttributes();

        await expect(global.alerts[0]).toEqual(new Error('No scraper url was provided.'))
        await expect(new_attrs.href).not.toBe(url);
    })

    it('will throw an error if the url provided was blank.', async () =>{
        global.setBadCallFetch()

        let card = editor.addComponents({ type: 'open-graph-card' })[0];

        let attributes = card.getAttributes();
        let attrs = {
            ...attributes,
            href: ''
        };

        card.setAttributes(attrs)
        await new Promise(process.nextTick);

        let new_attrs = card.getAttributes();

        await expect(global.alerts[0]).toEqual(new Error('Cannot scrape a blank url.'))
        await expect(new_attrs.href).not.toBe(url);
    })

    it('will throw an error if the url provided did not properly scrap.', async () =>{
        global.setGoodCallBadDataFetch()

        let card = editor.addComponents({ type: 'open-graph-card' })[0];

        let attributes = card.getAttributes();
        let attrs = {
            ...attributes,
            href: url
        };

        card.setAttributes(attrs)
        await new Promise(process.nextTick);

        let new_attrs = card.getAttributes();

        await expect(global.alerts[0]).toEqual(new Error('Data was not returned'))
        await expect(new_attrs.href).not.toBe(url);
    })

    it('will properly set a card if return value is correct', async () =>{
        global.setGoodCallGoodDataFetch()

        let card = editor.addComponents({ type: 'open-graph-card' })[0];

        let attributes = card.getAttributes();
        let attrs = {
            ...attributes,
            href: url
        };

        card.setAttributes(attrs)
        await new Promise(process.nextTick);

        let new_attrs = card.getAttributes();

        await expect(global.alerts).toHaveLength(0)
        await expect(new_attrs.href).toBe(url);
        await expect(new_attrs.image).toBe('https://img.itch.zone/aW1nLzkwNTg5NTgucG5n/original/BOHpEC.png')
    })

})