
import { launch, Protocol, TimeoutError} from "puppeteer";

 const cookies:Protocol.Network.CookieParam[] =
 [
    {
      name: 'dtPC',
      value: '2$405440118_16h1p2$405928573_912h1vPFQRGKWLCKLCHUPFABUJROATTLHCQFLV-0e2',
      domain: '.glocircle.ro',
      path: '/',
      expires: -1,
      httpOnly: false,
      secure: false,
      sameParty: false,
      sourceScheme: 'Secure',
      sourcePort: 443
    },
    {
      name: 'dtLatC',
      value: '176',
      domain: '.glocircle.ro',
      path: '/',
      expires: -1,
      httpOnly: false,
      secure: false,
      sameParty: false,
      sourceScheme: 'Secure',
      sourcePort: 443
    },
    {
      name: 'rxvt',
      value: '1628207728633|1628205440144',
      domain: '.glocircle.ro',
      path: '/',
      expires: -1,
      httpOnly: false,
      secure: false,
      sameParty: false,
      sourceScheme: 'Secure',
      sourcePort: 443
    },
    {
      name: 'dtCookie',
      value: 'v_4_srv_2_sn_9AAB1029FABB223226DE8DAECB04C8A2_perc_100000_ol_0_mul_1_app-3Ab213a76ccf3b7067_1_rcs-3Acss_0',
      domain: '.glocircle.ro',
      path: '/',
      expires: -1,
      httpOnly: false,
      secure: false,
      sameParty: false,
      sourceScheme: 'Secure',
      sourcePort: 443
    },
    {
      name: 'PHPSESSID_',
      value: 'equhnd0pev9k4bscdbmo7n4ede',
      domain: '.glocircle.ro',
      path: '/',
      expires: -1,
      httpOnly: true,
      secure: true,
      sameParty: false,
      sourceScheme: 'Secure',
      sourcePort: 443
    },
    {
      name: 'rxVisitor',
      value: '1628205440131OQJJ62NKAFIJOO6I0V5RBU7IU5C41PBM',
      domain: '.glocircle.ro',
      path: '/',
      expires: -1,
      httpOnly: false,
      secure: false,
      sameParty: false,
      sourceScheme: 'Secure',
      sourcePort: 443
    },
    {
      name: 'dtSa',
      value: '-',
      domain: '.glocircle.ro',
      path: '/',
      expires: -1,
      httpOnly: false,
      secure: false,
      sameParty: false,
      sourceScheme: 'Secure',
      sourcePort: 443
    }
  ]
  

async function main(): Promise<void>
{
    let browser = await launch({
        headless: false, 
    });
    let page = await browser.newPage();
    await page.setViewport({width:1366, height:768})
    await page.once("console", async () => {
        console.log(await page.cookies())
    } )
    page.setCookie(...cookies)

    await page.goto("https://glocircle.ro/loyalty/login/index/", {waitUntil:"networkidle0"});
    await page.click("button.amgdprcookie-button")
    await page.waitForNavigation({waitUntil:"networkidle0"})
    await page.type("input#telephone", "0730036351")
    await page.click("button[type=\"submit\"][class=\"action primary login\"]")
    try{
        await page.waitForNavigation({waitUntil:"networkidle0", timeout:3000})
       }catch(err){

       }
    await page.type("input[type=\"password\"][name=\"password\"][id=\"password\"]", "M@&inute312")
    await page.click("button[type=\"submit\"][class=\"action primary login\"][id=\"login\"]")
    await page.waitForNavigation({waitUntil:"networkidle0"})
    
    await page.setRequestInterception(true)
    page.once("request", req =>{
      Math.floor(Math.random() * 35) 
      function randomString(length:9, chars:any) {
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        //return result;
    }
    var rString = randomString(9, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ');
       //let alphanums = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
      //de rez
      
       req.continue({
         headers: {
           ...req.headers(),
           "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
           "origin": "https://glocircle.ro",
           "referer": "https://glocircle.ro/",
           "accept": "*/*",
           "sec-fetch-site": "same-origin",
           "x-requested-with": "XMLHttpRequest",
           "sec-fetch-mode": "cors",
           "sec-fetch-dest": "empty"
          },
         method: "POST",
        postData: `code=${"result"}`
       });

    } )
    const res = await page.goto("https://glocircle.ro/loyalty/customer/redeem")
    console.log(res);
}

main();
