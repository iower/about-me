const stackRaw = `
- title: Product creation
  items:
  
  - title: Pet projects
    status: experienced
  
  - title: Commercial projects
    status: experienced
  
  - title: Participation in startup
    status: experienced
    examples:
    - title: benice.tools
      url: https://benice.tools
    sources:
    - Steve Blank books
    - Blue Ocean Strategy
    - The Goal by Goldratt
  
  - title: Product owner role
    status: interested


- title: Communication
  items:
  
  - title: Trello
    status: experienced
  
  - title: Slask
    status: interested
  
  - title: Jira
    status: interested


- title: Self-organization / Goal-setting / Time management
  items:
  
  - title: My full stack state
    status: experienced
    examples:
    - title: This document
  
  - title: Schedules
    status: experienced
    examples:
    - title: (preparing for publication)
  
  - title: Schedule tracking soft
    status: experienced
    examples:
    - title: pomodoro
      url: https://github.com/iower/pomodoro


- title: Distributed code development
  items:
    
  - title: Git
    status: experienced
  
  - title: GitHub
    status: experienced
    examples:
    - title: iower
      url: https://github.com/iower/
  
  - title: GitLab
    status: experienced
  
#  - title: GitLab deployment
#    status: interested
#    sources:
#    - https://about.gitlab.com/2016/08/05/continuous-integration-delivery-and-deployment-with-gitlab/
#    - https://about.gitlab.com/2016/08/26/ci-deployment-and-environments/


- title: Domain knowledge and skills
  items:
  
  #- title: Crypto adoption
  #  status: experienced
  
  - title: Cryptocurrencies theory
    status: experienced
    sources:
    - https://www.youtube.com/watch?v=XAWGA7kYFOo&list=PLhZQuknA7yUBt82ow8rEfw_G8tNZjt3qB
  
  - title: Mining
    status: experienced
  
  - title: Market knowledge
    status: experienced
    examples:
    - title: Project in work...
    sources:
    - https://info.binance.com/en/research/marketresearch/institutional-insights-Q2-2019.html
  
  - title: Exchanges API
    status: experienced
  
  - title: Manual trading
    status: experienced
  
  - title: Automated trading
    status: experienced
  
  - title: Smart contracts
    status: interested
    subitems:
    
#    - title: Fift (ton)
#      status: interested
#    
#    - title: Solidity/Vyper (etherium)
#      status: interested
#  
  - title: IPFS usage
    status: interested

#- title: Deployment
# DO
# AWS
#
#- title: Databases

- title: Fullstack technologies
  items:
  
#  - title: WEB fundamentals
#    sources:
#    - https://developers.google.com/web/fundamentals/
#    - https://developers.google.com/web/tools/
  
  - title: JS
    sources:
    - https://learn.javascript.info/
    examples:
    - title: snake-js-1kb
      url: https://github.com/iower/snake-js-1kb
    subitems:
    - title: immutable
    - title: Ramda
  
  - title: Rust
    status: interested
  
  - title: Haskell
    status: interested
  
#  - title: OCaml
  
#  - title: Purescript
  
#  - title: Forth
#    sources:
#    # - some books
  
  - title: Fift
    status: interested


- title: Frontend technologies
  items:
  
  - title: HTML
    status: experienced
    examples:
    - title: Lots of...
  
  - title: CSS
    # status: experienced
    examples:
    - title: trip-512b-demo
      url: https://github.com/iower/quantum-trip-512b-demo
  
  - title: SASS
    examples:
    - title: throbby
      url: https://github.com/iower/throbby
  
  - title: Slim+Slm
    examples:
    - title: space-landing
      url: https://github.com/benice-tools/benice-space-landing
  
  - title: Vue
    examples:
    - title: OMY|ONE
      url: https://github.com/iower/OMY-ONE-drum-machine
    sources:
    - https://vuejs.org/v2/api/index.html
    subitems:
    - title: Vuex
  
  - title: React
    examples:
    - title: Organization-explorer
      url: https://github.com/iower/Organization-explorer
#    subitems:
#    - title: redux -> GraphQL + Appollo
#      subitems:
#      - title: sagas
#      - title: thunk
#    - title: recompose -> render-prop
#    - title: react-helmet
#    - title: react-dropzone
#    - title: react-spring
#    - title: react-downshift
#    - title: firebase
  
  - title: Elm
    status: interested


- title: Backend technologies
  items:
  
  - title: node.js
    examples:
    - title: benice
      url: https://benice.tools
    subitems:
    - title: Express
      sources:
      - https://expressjs.com/ru/
  
  - title: TS
    status: interested
#    sources:
#      - https://tproger.ru/translations/course-on-typescript/
#      - https://metanit.com/web/typescript/1.1.php
#      - http://www.typescriptlang.org/docs/home.html
#      - http://typescript-lang.ru/docs/
#      - https://refactoring.guru/ru/design-patterns/typescript


#- title: Math
#  
#  title: Euler project
#  sources:
#  - https://projecteuler.net/


- title: Related skills
  items:
  
  - title: Touch typing
    examples:
      - title: 300ppm/1%
    sources:
    - Stamina
  
  # - title: Awesome
  
  - title: Markdown
    sources:
    - https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
  
  - title: Regex
    sources:
    - https://regexone.com
  
  # - title: GIMP
  
  # - title: FIGMA
  #  sources:
  #  - https://www.figma.com/resources/learn-design/
  
  # - title: Vimium
  
  - title: Shell usage
  
  # - title: Remote manual deploy
  
  #- title: SPA+SEO
  #  sources:
  #  - https://www.onely.com/blog/ultimate-guide-javascript-seo/
  
  # - title: Sublime
  
  # - title: Nano
  
  # - title: Vim
  
  # - title: Emacs


#- title: Code writing
#  items:


- title: Low-level programming
  items:
  
  - title: C
    examples:
    - title: (preparing for publication)
  
  - title: x64 ASM
    status: interested
  
  - title: FPGA
    status: interested


- title: Electronics / Hardware development
  items:
  
  - title: Circuit design
  
  - title: PCB design
  
  - title: IC design
    status: interested


`;