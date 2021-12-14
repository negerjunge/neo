#!/bin/bash
CODE=$(echo $RANDOM | md5sum | head -c 9; echo;)
echo $CODE
curl -v -b Documents/c++/neo/cookies.txt https://glocircle.ro/loyalty/customer/redeem --compressed \
  -H 'authority: glocircle.ro' \
  -H 'sec-ch-ua: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"' \
  -H 'dnt: 1' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36' \
  -H 'x-dtpc: 1$303608910_117h15vRGACEVUGFWDLKDEMGVCFEOUFALUCOBRK-0e0' \
  -H 'accept: */*' \
  -H 'x-requested-with: XMLHttpRequest' \
  -H 'content-type: application/x-www-form-urlencoded; charset=UTF-8' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'origin: https://glocircle.ro' \
  -H 'sec-fetch-site: same-origin' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-dest: empty' \
  -H 'referer: https://glocircle.ro/' \
  -H 'accept-language: en-US,en;q=0.9,ro;q=0.8' \
  -H 'cookie: amcookie_allowed=0; _ga=GA1.2.1471062078.1639136591; offer-reminder-1=1; offer-reminder-1-show-notification=2; communication-19=true; _gid=GA1.2.132655407.1639351019; mage-cache-storage=%7B%7D; mage-cache-storage-section-invalidation=%7B%7D; recently_viewed_product=%7B%7D; recently_viewed_product_previous=%7B%7D; recently_compared_product=%7B%7D; recently_compared_product_previous=%7B%7D; product_data_storage=%7B%7D; dtCookie=v_4_srv_1_sn_3777792467A71F251902A3E5227D7383_perc_100000_ol_0_mul_1_app-3Ab213a76ccf3b7067_1_rcs-3Acss_0; rxVisitor=1639503589400NSI2J100HMTEBUF83BLFVVPTDOUS66TJ; mage-cache-sessid=true; mage-messages=; dtSa=-; form_key=4pXLJf2St3FcZYxR; PHPSESSID_=v7gsas1o3j4mfk3ptil2ls4gv1; private_content_version=4854bb6f848062b3727959fa4577f084; dtLatC=3; section_data_ids=%7B%22customer%22%3A1639503613%2C%22compare-products%22%3A1639503613%2C%22last-ordered-items%22%3A1639503613%2C%22cart%22%3A1639503613%2C%22directory-data%22%3A1639503613%2C%22instant-purchase%22%3A1639503613%2C%22captcha%22%3A1639503613%2C%22review%22%3A1639503613%2C%22wishlist%22%3A1639503613%2C%22subscription%22%3A1639503613%2C%22recently_viewed_product%22%3A1639503613%2C%22recently_compared_product%22%3A1639503613%2C%22product_data_storage%22%3A1639503613%2C%22magepal-gtm-jsdatalayer%22%3A1639503613%2C%22magepal-eegtm-jsdatalayer%22%3A1639503613%7D; rxvt=1639506110530|1639503589442; dtPC=1$303608910_117h15vRGACEVUGFWDLKDEMGVCFEOUFALUCOBRK-0e0' \
  --data-raw 'code=$CODE' \
  --compressed
