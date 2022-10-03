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
  function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
  }
  
function getCookie(name) {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");
    
    // Loop through the array elements
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        
        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if(name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }
    
    // Return null if not found
    return null;
}

if(window.location.href.includes('ignore')) {
  setCookie('ignore', true, 365);
}

var ignore = getCookie('ignore');
console.log(ignore);
if(!ignore) {
  mixpanel.init('eaae482845dadd88e1ce07b9fa03dd6b'); 
  mixpanel.track('DOCUMENT_VISIT');
}
    `],
    [
      "script",
      {},
      `window.onload = function() {
          const sidebarMenus = document.querySelectorAll('.sidebar-group.is-sub-group > .sidebar-heading')
          console.log("This is the sidebarMenus", sidebarMenus);
          for (var i = 0, len = sidebarMenus.length; i < len; i++) {
            sidebarMenus[i].classList.remove("clickable")
            sidebarMenus[i].classList.add("sidebar-heading-normal")
            sidebarMenus.addEventListener("click", function() {
              sidebarMenus[i].classList.remove("clickable")
              sidebarMenus[i].classList.add("sidebar-heading-normal")
          });
        }
        const header = document.querySelector('header.navbar');
        const mobileButton = document.querySelector('.sidebar-button');
        let isClicked = false;

        mobileButton.addEventListener("click", function onClick(event) {
          if(!isClicked) {
            header.style.backgroundColor = '#f2d4e7';
            console.log("header props", header.style.backgroundColor)
            isClicked = true
          } else {
            header.style.backgroundColor = 'white';
            console.log("header props", header.style.backgroundColor)
            isClicked = false
          }
        });
      }`,
    ],
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
                 title: 'CosmWasm contracts',
                 collapsable: true,
                 path: '/guide/develop/smart-contracts/contracts',
                 children: [
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
          title: 'Operate a node',
          collapsable: true,
          children: [
            'maintain/node/requirements',
            'maintain/node/install-pigeon',
            'maintain/node/install-palomad',
            'maintain/node/join-a-network',
            'maintain/node/system-config',
            'maintain/node/build-paloma-core',
            'maintain/node/set-up-production',
            'maintain/node/sync',
            'maintain/node/sign-with-multisig',
            'maintain/node/troubleshoot',
            'maintain/node/updates-and-additional',
          ]
        },
        {
          title: 'Run a validator',
          collapsable: true,
          children: [
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
           ],
          },
        {
            title: 'Resources',
            collapsable: true,
            children: [
              'resources/target-chains',
              'resources/governance',
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
