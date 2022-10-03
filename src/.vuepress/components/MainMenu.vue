<template>
  <div class="all-menu">
    <div class="main-menu">
      <div class="main-menu_container">
        <div @mouseover="showHovered_quickStart = true" @mouseleave="showHovered_quickStart = false" class="menu-items">
          <a href="/guide/develop/quick-start/quick-start.html">
            <img v-show="!showHovered_quickStart" src="/assets/quick_start.svg" alt="Quick Start">
            <img v-show="showHovered_quickStart" src="/assets/quick_start_hovered.svg" alt="Quick Start">
          </a>
        </div>
      </div>
      <div class="main-menu_container">
        <div @mouseover="showHovered_develop = true" @mouseleave="showHovered_develop = false" class="menu-items">
          <a href="/guide/develop/smart-contracts/contracts.html">
            <img v-show="!showHovered_develop" src="/assets/develop.svg" alt="Develop">
            <img v-show="showHovered_develop" src="/assets/develop_hovered.svg" alt="Develop">
          </a>
        </div>
      </div>
      <div class="main-menu_container">
        <div @mouseover="showHovered_validate = true" @mouseleave="showHovered_validate = false" class="menu-items">
          <a href="/guide/maintain/validator/validate-paloma.html" class="href">
            <img v-show="!showHovered_validate" src="/assets/validate.svg" alt="Validate">
            <img v-show="showHovered_validate" src="/assets/validate_hovered.svg" alt="Validate">
          </a>
        </div>
      </div>
      <div class="main-menu_container">
        <div @mouseover="showHovered_pigeonRelayer = true" @mouseleave="showHovered_pigeonRelayer = false" class="menu-items">
          <a href="/guide/maintain/node/install-pigeon.html" class="href">
            <img v-show="!showHovered_pigeonRelayer" src="/assets/pigeon_relayer.svg" alt="Pigeon relayer">
            <img v-show="showHovered_pigeonRelayer" src="/assets/pigeon_relayer_hovered.svg" alt="Pigeon relayer">
          </a>
        </div>
      </div>
    </div>
    <div class="social-menu">
      <div class="social-menu_container">
        <div @mouseover="showHovered_forum = true" @mouseleave="showHovered_forum = false" class="menu-items">
          <a href="https://forum.palomachain.com/" target="_blank">
            <img v-show="!showHovered_forum" src="/assets/forum.svg" alt="Forum">
            <img v-show="showHovered_forum" src="/assets/forum_hovered.svg" alt="Forum">
          </a>
        </div>
      </div>
      <div class="social-menu_container">
        <div @mouseover="showHovered_discord = true" @mouseleave="showHovered_discord = false" class="menu-items">
          <a href="https://discord.gg/tNqkNHvVNc" target="_blank">
            <img v-show="!showHovered_discord" src="/assets/discord.svg" alt="Discord">
            <img v-show="showHovered_discord" src="/assets/discord_hovered.svg" alt="Discord">
          </a>
        </div>
      </div>
      <div class="social-menu_container">
        <div @mouseover="showHovered_github = true" @mouseleave="showHovered_github = false" class="menu-items">
          <a href="https://github.com/palomachain" target="_blank">
            <img v-show="!showHovered_github" src="/assets/github.svg" alt="Github">
            <img v-show="showHovered_github" src="/assets/github_hovered.svg" alt="Github">
          </a>
        </div>
      </div>
    </div>
    <div class="etc-menu">
      <div class="etc-menu_container">
        <a href="https://volumefi.notion.site/Build-on-Paloma-Onboarding-Guide-28abc84384b54db8a5409fd67d97a457" target="_blank" rel="noopener noreferrer">
          <div class="menu-items">
            <div class="menu-container">
              <div class="etc-left">
                <img class="devs-grant-img" src="/assets/grants_logo.png" alt="Developers Grant Program">
              </div>
              <div class="etc-right">
                <h2 class="etc-title">
                  Developers Grant Program
                </h2>
                <p class="etc-description">
                  Paloma seeks innovative projects and stellar teams to join its growing ecosystem. Whether you’re an individual looking to use one of the projects or a developer wanting to build on Paloma, now is the time to get started. 
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="etc-menu_container">
        <a data-tf-popup="r0NYlO5S" data-tf-iframe-props="title=Getting Started With Paloma" data-tf-medium="snippet" style="font-family:Helvetica,Arial,sans-serif;display:inline-block;width:100%;white-space:nowrap;cursor:pointer;line-height:50px;text-align:center;margin:0;text-decoration:none;">
          <div class="menu-items">
            <div class="menu-container">
              <div class="etc-left collab-img">
                <img src="/assets/coo_logo.png" alt="Collaborate with Paloma">
              </div>
              <div class="etc-right">
                <h2 class="etc-title">
                  COOllaborate with Paloma
                </h2>
                <p class="etc-description">
                  Let us know what you're interested in and let's build together.
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showHovered_quickStart: false,
        showHovered_develop: false,
        showHovered_validate: false,
        showHovered_pigeonRelayer: false,
        showHovered_forum: false,
        showHovered_discord: false,
        showHovered_github: false,
      }
    }
  }
</script>
