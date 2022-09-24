const { description } = require('../../package')

module.exports = {
  base: "/",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Official Paloma Protocol Documentation",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#fffff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    [
      "link",
      {
        rel: "icon",
        href: "/assets/favicon_docs.png",
      },
    ],
    ['script', {}, `
          (function(f,b){if(!b.__SV){var e,g,i,h;window.mixpanel=b;b._i=[];b.init=function(e,f,c){function g(a,d){var b=d.split(".");2==b.length&&(a=a[b[0]],d=b[1]);a[d]=function(){a.push([d].concat(Array.prototype.slice.call(arguments,0)))}}var a=b;"undefined"!==typeof c?a=b[c]=[]:c="mixpanel";a.people=a.people||[];a.toString=function(a){var d="mixpanel";"mixpanel"!==c&&(d+="."+c);a||(d+=" (stub)");return d};a.people.toString=function(){return a.toString(1)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
for(h=0;h<i.length;h++)g(a,i[h]);var j="set set_once union unset remove delete".split(" ");a.get_group=function(){function b(c){d[c]=function(){call2_args=arguments;call2=[c].concat(Array.prototype.slice.call(call2_args,0));a.push([e,call2])}}for(var d={},e=["get_group"].concat(Array.prototype.slice.call(arguments,0)),c=0;c<j.length;c++)b(j[c]);return d};b._i.push([e,f,c])};b.__SV=1.2;e=f.createElement("script");e.type="text/javascript";e.async=!0;e.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?
MIXPANEL_CUSTOM_LIB_URL:"file:"===f.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\\/\\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";g=f.getElementsByTagName("script")[0];g.parentNode.insertBefore(e,g)}})(document,window.mixpanel||[]);


mixpanel.init('eaae482845dadd88e1ce07b9fa03dd6b'); 
mixpanel.track('DOCUMENT_VISIT');
      `],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    smoothScroll: true,
    logo: "/assets/Paloma_black.svg",
    nav: [
      {
        text: 'Developer Assistance',
        link: 'https://guaya23l1on.typeform.com/to/r0NYlO5S?typeform-source=www.palomachain.com ',
      },
      {
        text: 'Blog',
        link: 'https://www.palomachain.com/blog/'
      },
      {
        text: 'Forum',
        link: 'https://forum.palomachain.com/'
      },
      {
        text: 'Discord',
        link: 'https://discord.gg/tNqkNHvVNc'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/palomachain/paloma'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'About',
          collapsable: true,
          children:[
            ['introduction', 'Introduction'],
          ]
        },
        {
          title: 'Quick Start',
          collapsable: true,
          children: [
            ['develop/quick-start/quick-start', 'Send a message'],
            ['develop/quick-start/mint-egg', 'Mint an EGG'],
            ['develop/quick-start/resources', 'Resources and tools'],
              ]
          },
        {
          title: 'Develop',
          collapsable: true,
          children: [
            {
            title: 'Writing Smart Contracts',
            collapsable: true,
            path: '/guide/develop/smart-contracts/contracts',
              children: [
                {
                 title: 'CosmWasm Contracts',
                 collapsable: false,
                 children: [
                   ['develop/smart-contracts/contracts', 'CosmWasm'],
                   'develop/smart-contracts/interact-with-smart-contract',
                  ]
                },
                {
                  title: 'EVM contracts',
                  path: '/guide/develop/smart-contracts/hello-world-solidity',
                  collapsable: false,
                  children: [
                    ['develop/smart-contracts/hello-world-solidity', 'Solidity'],
                    ['develop/smart-contracts/hello-world-vyper', 'Vyper'],
                  ]
                },
                'develop/smart-contracts/open-source',
              ]
            },
            {
              title: 'CLI',
              path: '/guide/develop/palomad/palomad',
              collapsable: true,
              children: [
                'develop/palomad/palomad',
                'develop/palomad/commands',
                'develop/palomad/install-palomad',
                'develop/palomad/palomad-mac',
                'develop/palomad/using-palomad',
                'develop/palomad/subcommands',
              ]
            },
            {
              title: 'Javascript SDK',
              collapsable: true,
              path: '/guide/develop/paloma-js/getting-started',
              children: [
                ['develop/paloma-js/getting-started', 'Getting Started'],
                ['develop/paloma-js/wallets', 'Wallet'],
                ['develop/paloma-js/transactions', 'Transactions'],
                ['develop/paloma-js/smart-contracts', 'Smart Contracts'],
                ['develop/paloma-js/keys', 'Keys'],
                'develop/paloma-js/fees',
                ['develop/paloma-js/common-examples', 'Common Examples'],
                'develop/paloma-js/add-modules',
              ]
            },
            {
              title: 'Paloma Core',
              collapsable: true,
              path: '/guide/develop/module-specifications/specifications',
              children: [
                ['develop/module-specifications/specifications', 'Specifications'],
                'develop/module-specifications/spec-auth',
                'develop/module-specifications/spec-authz',
                'develop/module-specifications/spec-bank',
                'develop/module-specifications/spec-capability',
                'develop/module-specifications/spec-crisis',
                'develop/module-specifications/spec-distribution',
                'develop/module-specifications/spec-evidence',
                'develop/module-specifications/spec-feegrant',
                'develop/module-specifications/spec-governance',
                'develop/module-specifications/spec-mint',
                'develop/module-specifications/spec-params',
                'develop/module-specifications/spec-slashing',
                'develop/module-specifications/spec-staking',
                'develop/module-specifications/spec-upgrade',
                'develop/module-specifications/spec-wasm',
              ]
            },
            ]
          },
        {
          title: 'Tools and Integrations',
          collapsable: true,
          children: [
            ['develop/applications/overview', 'Extending Paloma'],
            ['develop/applications/compass-evm/overview','Compass EVM'],
            'develop/applications/pyth/pyth-price-feeds',
              ]
             },
        {
          title: 'Maintain',
          collapsable: true,
          children: [
            {
              title: 'Operate a node',
              path: '/guide/maintain/node/requirements',
              collapsable: true,
              children: [
                'maintain/node/requirements',
                'maintain/node/system-config',
                'maintain/node/build-paloma-core',
                'maintain/node/set-up-production',
                'maintain/node/join-a-network',
                'maintain/node/sync',
                'maintain/node/sign-with-multisig',
                'maintain/node/troubleshoot',
                'maintain/node/updates-and-additional',
              ]
            },
            {
              title: 'Become a validator',
              collapsable: true,
              path: '/guide/maintain/validator/validate-paloma',
              children: [
                ['maintain/validator/validate-paloma', 'Get started'],
                'maintain/validator/set-up-validator',
                'maintain/validator/court-delegations',
                'maintain/validator/implement-security',
                'maintain/validator/troubleshoot-validator-problems',
                'maintain/validator/faq',
              ]
            },
            {
              title: 'Govern the network',
              collapsable: true,
              path: '/guide/maintain/governance/governance',
              children: [
                'maintain/governance/proposals',
              ]
            },
            {
              title: 'Become a relay pigeon',
              collapsable: true,
              path: '/guide/maintain/relayer/pigeon',
              children: [
                'maintain/relayer/pigeon',
              ]
            },
          ]
        },
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    //["@maginapp/vuepress-plugin-code-copy", {
      ////selector: String,
      //color: "#ffffff",
      //backgroundColor: "#ffffff",
      //backgroundTransition: false,
      //successText: "Copied",
      //duration: 350,
      //iconVisible: true,
      //showInMobile: false,
      //align: { bottom: '7px', right: '12px' },
    //}],
  ]
}
