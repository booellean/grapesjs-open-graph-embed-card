export default (editor, opts = {}) => {
  const domc = editor.DomComponents;

  let options = {
    'url' : '',
    'headers' : {},
    'params' : {},
    'request_type' : 'GET',
    'query_name': 'url',
    ...opts
  };

  // valid keys
  const keys = [
    'description',
    'icon',
    'image',
    'keywords',
    'provider',
    'title',
    'type',
    'url',
  ]

  domc.addType('open-graph-card', {
    extend: 'default',
    extendFn: ['init'],
    extendView: 'default',
    extendFnView: ['onRender'],
    model: {
      defaults: {
        droppable: true,
        selectable : true,
        draggable: true,
        editable: true,
        components: model => {
          return {
            type: 'link',
            removable: false,
            selectable : false,
            droppable: false,
            draggable: false,
            layerable : false,
            copyable: false,
            attributes: {
              'data-og-card-attr' : "href",
              'data-og-card-type' : "link",
              'data-og-card-change' : "href",
              target: '_blank',
              href: model.attributes.attributes.href
            },
            components : {
              type: 'default',
              tagName: 'article',
              removable: false,
              droppable: false,
              draggable: false,
              copyable: false,
              attributes: {
                class: 'og-card',
              },
              components: [
                  {
                    type: 'default',
                    tagName: 'div',
                    removable: false,
                    droppable: false,
                    draggable: false,
                    copyable: false,
                    attributes: {
                      class: 'og-card-image',
                    },
                    components: {
                      type: 'default',
                      tagName: 'figure',
                      removable: false,
                      droppable: false,
                      draggable: false,
                      copyable: false,
                      attributes: {
                        'aria-hidden' : true,
                      },
                      components: {
                        type: 'image',
                        removable: false,
                        droppable: false,
                        draggable: false,
                        copyable: false,
                        attributes: {
                          'data-og-card-attr' : "image",
                          'data-og-card-type' : "image",
                          'data-og-card-change' : "src",
                          'aria-hidden' : true,
                          'alt' : 'card image',
                          src: model.attributes.attributes.image || '',
                        }
                      }
                    }
                  },
                  {
                    type: 'default',
                    tagName: 'div',
                    removable: false,
                    droppable: false,
                    draggable: false,
                    copyable: false,
                    attributes: {
                      class: 'og-card-content',
                    },
                    components: [
                      {
                        type: 'default',
                        tagName: 'header',
                        removable: false,
                        droppable: false,
                        draggable: false,
                        copyable: false,
                        components: {
                          type: 'text',
                          tagName: 'h1',
                          removable: false,
                          droppable: false,
                          draggable: false,
                          copyable: false,
                          attributes : {
                            'data-og-card-attr' : "title",
                            'data-og-card-type' : "textnode",
                            'data-og-card-change' : "content"
                          },
                          components: {
                            type: 'textnode',
                            content: model.attributes.attributes.title || '',
                            removable: false,
                            droppable: false,
                            draggable: false,
                            copyable: false,
                          }
                        }
                      },
                      {
                        type: 'text',
                        tagName: 'p',
                        removable: false,
                        droppable: false,
                        draggable: false,
                        copyable: false,
                        attributes: {
                          'data-og-card-attr' : "description",
                          'data-og-card-type' : "textnode",
                          'data-og-card-change' : "content"
                        },
                        components: {
                          type: 'textnode',
                          content: model.attributes.attributes.description || '',
                          removable: false,
                          droppable: false,
                          draggable: false,
                          copyable: false,
                        }
                      },
                      {
                        type: 'default',
                        tagName: 'footer',
                        removable: false,
                        droppable: false,
                        draggable: false,
                        copyable: false,
                        components: [
                          {
                            type: 'text',
                            tagName: 'p',
                            removable: false,
                            droppable: false,
                            draggable: false,
                            copyable: false,
                            attributes: {
                              'data-og-card-attr' : "url",
                              'data-og-card-type' : "textnode",
                              'data-og-card-change' : "content"
                            },
                            components: {
                              type: 'textnode',
                              content: model.attributes.attributes.url || '',
                              removable: false,
                              droppable: false,
                              draggable: false,
                              copyable: false,
                            }
                          },
                          {
                            type: 'text',
                            tagName: 'p',
                            removable: false,
                            droppable: false,
                            draggable: false,
                            copyable: false,
                            attributes: {
                              'data-og-card-attr' : "keywords",
                              'data-og-card-type' : "textnode",
                              'data-og-card-change' : "content"
                            },
                            components: {
                              type: 'textnode',
                              content: model.attributes.attributes.keywords || '',
                              removable: false,
                              droppable: false,
                              draggable: false,
                              copyable: false,
                            }
                          }
                        ]
                      }
                    ]
                  }
              ]
            }
          }
        },
        styles: `
          :root {
            --og-card-background: #f8f9fa;
            --og-card-border-radius: 0rem;
            --og-card-border-color: #dcdcdc;
            --og-card-border-style: solid;
            --og-card-border-width: 1px;
            --og-card-max-width: 600px;
            --og-card-font-size: 1em;
            --og-card-font-color: #494949;
            --og-card-font-hover-color: #494949;
            --og-card-figure-background: #848482;
            --og-card-header-background: transparent;
            --og-card-body-background: transparent;
            --og-card-footer-background: transparent;
          }
          .og-parent {
            width: 100%;
            font-size: var(--og-card-font-size);
            max-width: var(--og-card-max-width);
            background-color: var(--og-card-background);
            border-top-left-radius: var(--og-card-border-radius);
            border-top-right-radius: var(--og-card-border-radius);
            border-bottom-left-radius: var(--og-card-border-radius);
            border-bottom-right-radius: var(--og-card-border-radius);
            border-top-style: var(--og-card-border-style);
            border-bottom-style: var(--og-card-border-style);
            border-left-style: var(--og-card-border-style);
            border-right-style: var(--og-card-border-style);
            border-top-width: var(--og-card-border-width);
            border-bottom-width: var(--og-card-border-width);
            border-left-width: var(--og-card-border-width);
            border-right-width: var(--og-card-border-width);
            border-top-color: var(--og-card-border-color);
            border-bottom-color: var(--og-card-border-color);
            border-left-color: var(--og-card-border-color);
            border-right-color: var(--og-card-border-color);
            margin: 0 auto;
            overflow: hidden;
            margin: 1rem;
          }
          div.og-parent p, div.og-parent h1 {
            color: var(--og-card-font-color);
          }
          div.og-parent:hover {
            color: var(--og-card-font-hover-color);
          }
          div.og-parent > a {
            text-decoration: none;
          }
          article.og-card {
            display: flex;
            flex-flow: row nowrap;
          }
          div.og-card-image {
            width: 35%;
            box-sizing: border-box;
            overflow: hidden;
            padding: 0;
            margin: 0;
          }
          div.og-card-image > figure:before {
            content: '';
            display: block;
            padding-top: 100%;
          }
          div.og-card-image > figure {
            width: 100%;
            margin: 0;
            padding: 0;
            overflow: hidden;
            display: grid;
            height: 100%;
            background-color: var(--og-card-figure-background);
          }
          div.og-card-image > figure > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          div.og-card-image > figure:before,
          div.og-card-image > figure > img {
            grid-area: 1 / 1 / 2 / 2;
          }
          div.og-card-content {
            width: 65%;
            box-sizing: border-box;
            display: flex;
            flex-flow: column nowrap;
          }
          div.og-card-content > header {
            background-color: var(--og-card-header-background);
          }
          div.og-card-content > header > h1 {
            margin: 0;
            padding: 1rem;
          }
          div.og-card-content > p {
            height: 0;
            flex-grow: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            margin: 0;
            padding: 1rem;
            background-color: var(--og-card-body-background);
          }
          div.og-card-content > footer {
            margin: 0;
            padding: 1rem;
            background-color: var(--og-card-footer-background);
            overflow: hidden;
          }
          div.og-card-content > footer > p {
            margin: 0;
          }
          div.og-card-content > footer > p:empty {
            display: none;
          }
          div.og-card-content > footer > p:not(:first-child) {
            padding-top: 0.5rem
          }
        `,
        traits: [
          {
            type: 'text',
            name: 'href',
            placeholder: 'Paste your url here to generate a card.'
          },
          {
            type: 'text',
            name: 'title',
          },
          {
            type: 'text',
            name: 'description',
          },
          {
            type: 'text',
            name: 'image',
          },
          {
            type: 'text',
            name: 'keywords',
          },
          {
            type: 'text',
            name: 'language',
          },
          {
            type: 'text',
            name: 'type',
          },
          {
            type: 'text',
            name: 'url',
          },
        ],
        attributes: {
          href: 'https://en.wikipedia.org/wiki/Facebook_Platform#Open_Graph_protocol',
          description: "The Facebook Platform is the set of services, tools, and products provided by the social networking service Facebook for third-party developers to create their own applications and services that access data in Facebook.[1]",
          icon: "https://en.wikipedia.org/static/apple-touch/wikipedia.png",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Open_Graph_protocol_logo.png/120px-Open_Graph_protocol_logo.png",
          keywords: '',
          provider: "en wikipedia",
          title: "Facebook Platform - Wikipedia",
          type: "website",
          url: "https://en.wikipedia.org/wiki/Facebook_Platform",
          target: '_blank',
          class: 'og-parent',
        },
      },
      init() {
        this.listenTo(this, 'change:attributes:href', this.handleHrefChange);
      },
      async handleHrefChange(c, v) {
        console.log(c, v);
        let backup = c._previousAttributes.attributes.href;

        if(backup === v) return; // We had reset the href from bad request

        try{
          if(!options.url) throw new new Error('No scraper url was provided.');
          if(!v) throw new Error('Cannot scrape a blank url.');

          let params = options.params;
          params['method'] = options.request_type;
          params['headers'] = options.headers;

          return fetch(`${options.url}?${options.query_name}=${encodeURIComponent(this.attributes.attributes.href)}`, params)
            .then( res => {
              if(res.ok){
                return res.json();
              }
              throw new Error('The url could not be parsed')
            })
            .then( data => {
              if(data.data) return data.data;
              throw new Error('Data was not returned')
            })
            .then( meta => {
              // If there is no meta data... somehow? We will throw an error
              if(!meta) throw new Error('Metadata could not be parsed');

              let attrs = {...this.attributes.attributes};

              // Make sure to remove values if they aren't returned in parse
              keys.forEach( key => {
                attrs[key] = meta[key] || '';
              })

              this.setAttributes(attrs);
            })
            .catch( error => {
              alert(error);
              let attrs = Object.assign({ ...this.attributes.attributes }, { href : backup });
              this.setAttributes(attrs);
              return false;
            })
        }catch(e){
          alert(e);
          let attrs = Object.assign({ ...this.attributes.attributes }, { href : backup });
          this.setAttributes(attrs);
          return false;
        }
        // TODO: handle website prop parsing and errors
      },
    },
    view: {
      onRender() {
        // We are setting up listeners so the props properly update with the parent attribute change.
        Object.keys(this.model.attributes.attributes).map( attr => {
          let c = this.model.find(`[data-og-card-attr="${attr}"]`).pop();

          if(c){
            let type = c.attributes.attributes['data-og-card-type'];
            let prop = c.attributes.attributes['data-og-card-change'];
            let child;

            if(c.attributes.type !== type) child = c.findType(type).pop();

            // Not sure why the view render needs to be called since we are using a dynamic prop, but here we are
            if(child){
              child.listenTo(this.model, `change:attributes:${attr}`, () => {
                let val = this.model.attributes.attributes[attr];
                child.set(prop, val);
                c.view.render();
              });
            }else{
              c.listenTo(this.model, `change:attributes:${attr}`, () => {
                let val = this.model.attributes.attributes[attr];
                c.set(prop, val)
                c.view.render();
              });
            }
          }
        })
      },
    },
  });
};
