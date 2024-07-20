const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/AkameTechInfo/♠︎AKAME♠︎-MÐ";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+234 814 993 9219,+234 806 198 2806";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "+234 814 993 9219";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_13_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTgzLFxuICAgICAgICA3OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDUzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUzLFxuICAgICAgICA4NSxcbiAgICAgICAgMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY5LFxuICAgICAgICA1MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3LFxuICAgICAgICA4LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDksXG4gICAgICAgIDkzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjEyLFxuICAgICAgICA2MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjgsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDksXG4gICAgICAgIDkwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTI1LFxuICAgICAgICA1MixcbiAgICAgICAgOTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE0LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzksXG4gICAgICAgIDExNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDUxLFxuICAgICAgICA1NCxcbiAgICAgICAgODAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjksXG4gICAgICAgIDcwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTksXG4gICAgICAgIDExNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTk5LFxuICAgICAgICA2OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAzLFxuICAgICAgICAyMjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTExLFxuICAgICAgICA4NyxcbiAgICAgICAgODMsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjksXG4gICAgICAgIDgxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAzOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTMyLFxuICAgICAgICA0MixcbiAgICAgICAgMjQsXG4gICAgICAgIDk0LFxuICAgICAgICAxMixcbiAgICAgICAgNDcsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIsXG4gICAgICAgIDY3LFxuICAgICAgICAyNSxcbiAgICAgICAgNDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgODksXG4gICAgICAgIDcyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDkwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIzLFxuICAgICAgICA2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTcwLFxuICAgICAgICA3MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDkyLFxuICAgICAgICA0NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTExLFxuICAgICAgICA4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMzAzRmFGQUtrSkVxUm1pVi9mK3hYT1BTM01zenJGa2tlYlRxT3k0VFNJbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiczl5VDBaZnpUV1NRMHZKNkNxVXpjd1wiLFxuICBcInBob25lSWRcIjogXCI2MjQzMDA3Ny0zNTA3LTRiMjEtOGZiYS00MTdkZjZhODJiMzdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAwLFxuICAgICAgMjI1LFxuICAgICAgMjQ5LFxuICAgICAgOTEsXG4gICAgICAxOTQsXG4gICAgICAzNSxcbiAgICAgIDEyLFxuICAgICAgMTE3LFxuICAgICAgMTY1LFxuICAgICAgMjAyLFxuICAgICAgMTI1LFxuICAgICAgMTQyLFxuICAgICAgMTA2LFxuICAgICAgMjU1LFxuICAgICAgMTIwLFxuICAgICAgMjQ4LFxuICAgICAgMTAxLFxuICAgICAgMjAyLFxuICAgICAgMjUsXG4gICAgICAyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzAsXG4gICAgICAyMjEsXG4gICAgICAxMzksXG4gICAgICA0MixcbiAgICAgIDQwLFxuICAgICAgMjM0LFxuICAgICAgMjA2LFxuICAgICAgMTcsXG4gICAgICAxNjEsXG4gICAgICAyMSxcbiAgICAgIDEyOSxcbiAgICAgIDExOCxcbiAgICAgIDE4OCxcbiAgICAgIDE2NixcbiAgICAgIDE1MixcbiAgICAgIDE0LFxuICAgICAgNzgsXG4gICAgICAyMDUsXG4gICAgICAxNDgsXG4gICAgICAyMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOEdNVDVFV1dcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNDk5MzkyMTk6ODVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExMzgxNzAzNjA0MjQyODo4NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNVGVpZWNGRU16VDdyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImYydWJ4UWRldzhNRmRWYWduNEpuY2h3RzZkTEpBL1JheHZsRzMzQ0h4UnM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZE1ZZlIzWXh6MnlVTm1oS3VublVuU2xDZWxZSXAvNmdoOHMvMTB0d0tvWVE4NEkyaE9vZDB4Y0d3WTJBQzBOZlZ2a09qUyt3MUdtQ25YWFgydUVWQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMDBRUHRveHpQeHl1SnA1bjZJdzBVeGw3WHlvSzFNbWN0dmV5bnJNL1NYU3BGNnZ2dEQrZmhLclJ3cUVWdkFPeUN3eThLekcvZkVVQzNLbFlLTzNURFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE0OTkzOTIxOTo4NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE0Nzc1ODQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLb2lcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtvaS5qc29uIjogIntcImtleURhdGFcIjpcIjc2RWovZit4REFobCt4azhDTlB2UlBLQUFwUnBkZ2k5dytNcThscTdYMVU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU1ODM0MzQ5MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "♠︎AKAME♠︎-MÐ",
  botname : process.env.BOT_NAME  || "♠︎AKAME♠︎-MÐ",
  ownername:process.env.OWNER_NAME|| " °AKAMEㅤ挨°",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "♠︎AKAME♠︎-MÐ"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
