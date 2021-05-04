const logger = require('hexo-log')()

/**
 * Load Config
 */

 hexo.on("generateBefore", () => {
  require("./config")(hexo);
});


/**
 * Print welcome message
 */

 hexo.on('ready', () => {
    logger.info(`


__   _       ___   _____   __   _   _____       ___   _____  
|  \ | |     /   | /  _  \ |  \ | | /  _  \     /   | /  ___/ 
|   \| |    / /| | | | | | |   \| | | | | |    / /| | | |___  
| |\   |   / /-| | | | | | | |\   | | | | |   / /-| | \___  \ 
| | \  |  / /--| | | |_| | | | \  | | |_| |  / /--| |  ___| | 
|_|  \_| /_/   |_| \_____/ |_|  \_| \_____/ /_/   |_| /_____/ 

                    Made By Adkinsm

                   Open Source By MIT


`)});
