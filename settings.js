


const fs = require('fs');  //----- module----//

//checking if config.env exist otherwise settings.js will be used
//////////////////////////////////////////////////////////////
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
/////////////////////----END---///////////////////////////////




//////////////////////////////////////////////////
/////----------------Global---------------//////
/////////////////////////////////////////////////

global.thumb = fs.readFileSync('./lib/bugs/XByte.png') //Don't change
//////////////////////////////////////////////////////////
const BOTNAME = 'X - Bot'; //BOT name
//////////////////////////////////////////////////////////
const FOOTERNAME = '*Powered by Ajk Zaid*'; //Footer text











//----------------OWNER NUMBER------------------------------//
//////////////////////////////////////////////////////////////////

global.owner = process.env.OWNER_NUMBER  || '923498279596' ;  //put your number without +

/////////////////////////////////////////////////////////////////
//-------------------------------------------------------//




//////////////////////Global-end////////////////////////////////////////
module.exports = { //exporting modules to use in plugins









//----------------Session ID------------------------------//
//////////////////////////////////////////////////////////////////

SESSION_ID: process.env.SESSION_ID || 'SUHAIL_22_22_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg4LFxuICAgICAgICA4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDUyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDg3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODIsXG4gICAgICAgIDk4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgODMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDU5LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU2LFxuICAgICAgICA2MixcbiAgICAgICAgODAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg4LFxuICAgICAgICA0NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjksXG4gICAgICAgIDM2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDMwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTc5LFxuICAgICAgICA2NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA0LFxuICAgICAgICA2NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDQsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAzNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMyxcbiAgICAgICAgOTksXG4gICAgICAgIDQyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA2MixcbiAgICAgICAgODcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgODcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk0LFxuICAgICAgICAxODIsXG4gICAgICAgIDk3LFxuICAgICAgICA0MixcbiAgICAgICAgNDksXG4gICAgICAgIDYyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDYsXG4gICAgICAgIDkzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNWlBbUNjUy9IOVRnTmNqM1ZmS2RINWc3dUZqL1ZiV1JaT1oyZXpYTkVOQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzMDUzNDg3MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjM4Q0JCMjY3QzA4NzExMEFDMEZFMTI1RUM1RUMxODk2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjk4MjkzMlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzMwNTM0ODcyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjZFNkRBNTQ5M0YyRTVGRjk0NTczMzkyQzY1RjJENzRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyOTgyOTMyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlJqV25lSUpMUmJlRU5KVzRJcGxvRWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTQzZmIxODMtZDI2Yi00MmNlLWI1MmEtYjIzNmNhYWEwNTlhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUsXG4gICAgICAxMTksXG4gICAgICAyOSxcbiAgICAgIDIzMixcbiAgICAgIDE3NSxcbiAgICAgIDI3LFxuICAgICAgMTg5LFxuICAgICAgMTkzLFxuICAgICAgMTk4LFxuICAgICAgMTg3LFxuICAgICAgMjA1LFxuICAgICAgMTYyLFxuICAgICAgMjQzLFxuICAgICAgMjQ1LFxuICAgICAgMTAxLFxuICAgICAgMTUsXG4gICAgICAxMDAsXG4gICAgICAyMixcbiAgICAgIDczLFxuICAgICAgNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjMsXG4gICAgICAzNSxcbiAgICAgIDIwNixcbiAgICAgIDMwLFxuICAgICAgMjM5LFxuICAgICAgMjM3LFxuICAgICAgMzgsXG4gICAgICAzMCxcbiAgICAgIDQ4LFxuICAgICAgMTQzLFxuICAgICAgMjI1LFxuICAgICAgMzksXG4gICAgICAyNDEsXG4gICAgICAxMTUsXG4gICAgICAxMjAsXG4gICAgICAxNjgsXG4gICAgICAxNjcsXG4gICAgICA0NCxcbiAgICAgIDExMCxcbiAgICAgIDEyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFRFlCNEZZVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMzA1MzQ4NzI4OjYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1MzQ3NjAzMzkwNTQ0OjYzQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkJPVCBCWSBaQUlEXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTkRCaE13QkVJL0V5clVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJGeXluVTVQZWU1MjJRaVZvTjdURTVZOUN4SGdPSzl3TWtJbWMwV3o0dGdvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjNvV0grY3ZxTXhvVldOc3h0cUg4cHh4WnQ2M2dxelFVcXk4T00wcXdDWkVCQ0VwRVk1Q3pkTHNlL28wdndHVkhSZ3lxZW5ZT3dXMmVMcStNM0JKNkFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjUyNm5LVnZNKy9Iajl1OVlzdis2dFRBRkRTNG9rZGlib3BuUjYzNG9zRWd3MWRmeUNqeDNWeDRxdUJ6YVVDa0wySkRweGFHajBtalRKQ1Npd3Zsa0RBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzMwNTM0ODcyODo2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI5ODI5MzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQandcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBqdy5qc29uIjogIntcImtleURhdGFcIjpcIlhQRVAwZERsTzdYY2JPNTVmOGJoMUV0anZwN2hBeVNMa01NQS9kcTY5Nzg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDI3ODkyOTQ0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI4NzY5MDIzODFcIn0iCn0=', //Paste your session ID here

/////////////////////////////////////////////////////////////////
//-------------------------------------------------------//










//----------------BOT LOGO------------------------------//
//////////////////////////////////////////////////////////////////
LOGO: process.env.LOGO || `https://telegra.ph/file/4dc85a29bee9f0fd24c71.jpg` , //BOT logo
/////////////////////////////////////////////////////////////////
//-------------------------------------------------------//





LANG:  process.env.LANG || 'EN' , //URDU OR EN
//////////////////////////////////////////////////////////

PREFIX: process.env.PREFIX || '.' , //PREFIX, LEAVE IT DEFAULT OTHERWISE BUTTON WILL NOT WORK
//////////////////////////////////////////////////////////

WORK_TYPE: process.env.WORK_TYPE || 'public' , //public or private
//////////////////////////////////////////////////////////

travaSend: process.env.TRAVA_SEND || '25' ,   //BUGS
//////////////////////////////////////////////////////////

COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' , //button or nonbutton
//////////////////////////////////////////////////////////

MODERATORS : process.env.MODERATORS === undefined ? "923494279596" : process.env.MODERATORS ,    
//////////////////////////////////////////////////////////

MAX_SIZE: process.env.MAX_SIZE === undefined ? '1536': process.env.MAX_SIZE, //Maximum size that bot can download a file   
//////////////////////////////////////////////////////////

OWNER_NAME: process.env.OWNER_NAME || 'prince' , //Your name
//////////////////////////////////////////////////////////

POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9' : process.env.POSTGRESQL_URL,
//////////////////////////////////////////////////////////

FOOTER: process.env.FOOTER || '*Powered by prince*',    
//////////////////////////////////////////////////////////

ANTI_BAD: process.env.ANTI_BAD || false  ,  //true or false
//////////////////////////////////////////////////////////

AUTO_REACT:  process.env.AUTO_REACT  || false  ,     //true or false
//////////////////////////////////////////////////////////

AUTO_TYPING:  process.env.AUTO_TYPING  || false  , //true or false
//////////////////////////////////////////////////////////

AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,  //true or false
//////////////////////////////////////////////////////////

AUTO_READ:  process.env.AUTO_READ  || false  , //true or false
//////////////////////////////////////////////////////////

AUTO_BIO:  process.env.AUTO_BIO  || false  ,        //true or false
//////////////////////////////////////////////////////////

ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,  //true or false
//////////////////////////////////////////////////////////

HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,    
//////////////////////////////////////////////////////////

HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME,        
//////////////////////////////////////////////////////////

INBOX_USER: process.env.INBOX_USER === undefined ? '' : process.env.INBOX_USER,
//////////////////////////////////////////////////////////

BANNED_USER: process.env.BANNED_USER === undefined ? '' : process.env.BANNED_USER ,    //banned user number 
//////////////////////////////////////////////////////////

AI_MODE: process.env.AI_MODE === undefined ? 'true' : process.env.AI_MODE, //true or false
//////////////////////////////////////////////////////////

ANTI_LINK: process.env.ANTI_LINK || true  , //true or false
//////////////////////////////////////////////////////////

BOT_DETECT: process.env.BOT_DETECT === undefined ? 'false' : process.env.BOT_DETECT,  //true or false    
//////////////////////////////////////////////////////////

ANTI_BOT: process.env.ANTI_BOT || false  , //true or false
//////////////////////////////////////////////////////////

ANTI_CALL: process.env.ANTI_CALL || false  , //true or false
//////////////////////////////////////////////////////////

ALIVE: process.env.ALIVE || `default`,     
//////////////////////////////////////////////////////////

AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || false  ,     //true or false
//////////////////////////////////////////////////////////

AUTO_STICKER: process.env.AUTO_STICKER || false  , //true or false
//////////////////////////////////////////////////////////

WELCOME:  process.env.WELCOME  || false ,   //true or false
//////////////////////////////////////////////////////////

ANTI_DELETE : process.env.ANTI_DELETE || false , //true or false
//////////////////////////////////////////////////////////

DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO    
////////////---------X - B Y T E---------////////////////
};
