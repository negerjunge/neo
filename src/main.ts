
import { launch, Protocol, TimeoutError } from "puppeteer";

const cookies: Protocol.Network.CookieParam[] =
  [
    {
      name: 'dtPC',
      value: '5%24483488967_372h-vJRANMWVRFHPAMTTVWKSQSQUQVHJCARWR-0e0',
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
      value: '2',
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
      value: '1639085713949%7C1639083461013',
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
      value: 'v_4_srv_5_sn_D343B6EC24D70459728ED76DF8BA1DEF_perc_100000_ol_0_mul_1_app-3Ab213a76ccf3b7067_1_rcs-3Acss_0',
      domain: '.glocircle.ro',
      path: '/',
      expires: -1,
      httpOnly: false,
      secure: false,
      sameParty: false,
      sourceScheme: 'Secure',
      sourcePort: 443
    },
    //{
    //  "domain":".glocircle.ro","hostOnly":false,"httpOnly":false,"name":"dtCookie","path":"/","secure":false,"session":true,"storeId":"0","value":"v_4_srv_4_sn_3D1AB47DF9A0F8DA423203E4FD14ECBA_perc_100000_ol_0_mul_1_app-3Ab213a76ccf3b7067_1_rcs-3Acss_0"
    //},
    {
      name: 'PHPSESSID_',
      value: '247jo3mgjign8hirtta1leomnc',
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
      value: '16390834610080FPED3O7R6VNOBEMLO2PAJFJJ1HOE3JV',
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


async function main(): Promise<void> {
  let browser = await launch({
    headless: false,
  });
  let page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 768 })
  await page.once("console", async () => {
    console.log(await page.cookies())
  })
  page.setCookie(...cookies)

  await page.goto("https://glocircle.ro/loyalty/login/index/", { waitUntil: "networkidle0" });
  await page.click("button.amgdprcookie-button")
  await page.waitForNavigation({ waitUntil: "networkidle0" })
  await page.type("input#telephone", "0790338446")
  await page.click("button[type=\"submit\"][class=\"action primary login\"]")
  try {
    await page.waitForNavigation({ waitUntil: "networkidle0"})
  } catch (err) {

  }
  await page.type("input[type=\"password\"][name=\"password\"][id=\"password\"]", "M@&inute312")
  await page.click("button[type=\"submit\"][class=\"action primary login\"][id=\"login\"]")
  await page.waitForNavigation({ waitUntil: "networkidle0" })
  //await page.waitForSelector("div[class=\"subs-content\"]")
  //await page.click("a[class=\"close\"]")
  await page.setRequestInterception(true)
  //await page.goto("https://glocircle.ro/loyalty/costumer/redeem");
  page.once("request", req=> {
    page.removeAllListeners();
    Math.floor(Math.random() * 35)
    function randomString(length: 9, chars: any) {
      var result = '';
      for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
      return result
    }
    var rString = randomString(9, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    console.log("ass")
    
    req.continue({
      headers: {
        ...req.headers(),
        "autorithy": 'glocircle.ro',
        "method": 'POST',
        "path": '/loyalty/customer/redeem',
        "scheme": 'https',
        "accept": '*/*',
        "accept-encoding": '"gzip", "deflate", "br"',
        "accept-language": 'en-US, en; q=0.9',
        "content-lenght": '6',
        "content-type": 'application/x-www-form-urlencoded; charset=UTF-8',
        //"cookie": 'offer-reminder-1-show-notification=2; offer-reminder-1=2; communication-19=true; dtCookie=v_4_srv_4_sn_FAEA6B9F1E52D0A1D09F98E59E2A45A7_perc_100000_ol_0_mul_1_app-3Ab213a76ccf3b7067_1_rcs-3Acss_0; rxVisitor=1639306385748AOJMR48J2VBGPA0STNSDQL5AAVUJU45A; mage-cache-storage={}; mage-cache-storage-section-invalidation={}; mage-cache-sessid=true; product_data_storage={}; amcookie_allowed=0; _ga=GA1.2.1453997166.1639306392; _gid=GA1.2.1855516703.1639306392; _gat=1; mage-messages=; recently_viewed_product={}; recently_viewed_product_previous={}; recently_compared_product={}; recently_compared_product_previous={}; dtSa=-; form_key=ICDPTItJfDdvF9Jv; private_content_version=c1adb5d77db9a1aa2368051c923a4093; PHPSESSID_=s020at9g11v9ust2fq8ga7f1hm; dtLatC=2; section_data_ids={"customer":1639306405,"compare-products":1639306405,"last-ordered-items":1639306405,"cart":1639306405,"directory-data":1639306405,"instant-purchase":1639306405,"captcha":1639306405,"review":1639306405,"wishlist":1639306405,"subscription":1639306405,"recently_viewed_product":1639306405,"recently_compared_product":1639306405,"product_data_storage":1639306405,"magepal-gtm-jsdatalayer":1639306405,"magepal-eegtm-jsdatalayer":1639306405}; rxvt=1639308231424|1639306385752; dtPC=4$106402904_219h9vHAUKTHJVFTPHMTFFPBMNWIQNBAVLLMWJ-0e0',
        "origin": 'https://glocircle.ro',
        "referer": 'https://glocircle.ro/',
        "sec-fetch-ua-mobile": '?0',
        "sech-ch-ua-platform": 'Linux',
        "sec-fetch-dest": 'empty',
        "sec-fetch-mode": 'cors',
        "sec-fetch-site": 'same-origin',
        //"x-dtpc": '4$106402904_219h9vHAUKTHJVFTPHMTFFPBMNWIQNBAVLLMWJ-0e0',
        "x-requested-with": 'XMLHttpRequest'
      } ,
      //method: "POST",
      postData: `code=${"rString"}`
    });
    
    page.setRequestInterception(false);
  })
  const res = await page.goto("https://glocircle.ro/loyalty/customer/redeem");
  //return;
}

main();
