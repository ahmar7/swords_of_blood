import { config } from "../functions/config";

export default function Strings() {
  return {
    tokenAddress: "TOKEN ADDRESS",
    logoTitle: "Logo",
    aboutTtl: "เกี่ยวกับ",
    wpTtl: "กระดาษสีขาว",
    allocTtl: "การจัดสรรโทเค็น",
    deckTtl: "สนามดาดฟ้า",
    presaleTtl: "ก่อนการขาย",
    rmTtl: "แผนงาน",
    auditTtl: "การตรวจสอบ",
    projectTtl: "โครงการ",
    quickLinksTtl: "Quick links",
    privPolicy: "นโยบายความเป็นส่วนตัว",
    termsAndConds: "Terms and Conditions",
    amlPolicy: "นโยบายต่อต้านการฟอกเงิน",
    sitemap: "Sitemap",
    salePolicy: `ข้อกำหนดและเงื่อนไขการขาย ${config.tokenSymbol}`,
    descText1:
      "กอบกู้อาณาจักรจากอนาธิปไตยในเกม Action RPG บนมือถือที่ชวนดื่มด่ำ! ต่อสู้กับศัตรูจากยมโลกโบราณโดยใช้เวทมนตร์คาถาและอาวุธเหล็กที่ดุร้าย! ติดตามโซเชียลของเราเพื่อรับข่าวสารล่าสุด!",
    descText2:
      "Copyright © {YEAR} Hitbox Holdings SVG LLC, a St Vincent Corporation",
    descText3:
      "Suite 305 Griffith Corporate Centre, Kingstown, St Vincent, and the Grenadines.",
    quickLinks: "Quick links",
    // presaleStage: 'Presale stage',
    presaleStage: "PRESALE 1 เปิดอย่างเป็นทางการ",

    // buyBeforeTheEnd: "Hurry before the end of presale!",
    buyBeforeTheEnd: "Please wait for announcements",
    buyBefore: "Hurry before Presale 3 price increases to",
    soldTtl: "ขายแล้ว",
    raisedTtl: "ที่ยกขึ้น",
    connectWallet: "Connect Wallet",
    minimumPurchWarn: `Purchase amount must be not less than {VALUE1} ${config.tokenSymbol} and no more than {VALUE2} ${config.tokenSymbol}.`,
    minimumPurchWarn2: `Purchase amount must be no more than {VALUE1} ${config.tokenSymbol}.`,
    presaleInactive: "Presale is inactive.",
    insufFunds: "You have not enough money to make a transaction.",
    impossToTx: "It is impossible to make a transaction.",
    invalidTime: "Invalid time.",
    stayAndWait:
      "Please stay on the website and wait for the transaction confirmation",
    goesWrong: "You canceled the operation or something goes wrong.",
    thankYou: "Thank you for your purchase!",
    tokPayFailed: "Token payment failed",
    claimNoFunds: "You have no tokens available for withdrawal.",
    statClaimed: `Your ${config.tokenSymbol} tokens will be sent to your address soon.`,
    connectNote:
      "*Please note that, this action can not be undone once the wallet is authorize.",
    connectTheWallet: "Connect the wallet",
    youOwn: "You own",
    buyWith: "Buy with",
    claimTokens: "Claim",
    buyTokenWith: `Buy ${config.tokenSymbol} with`,
    minimumTtl: "Minimum",
    buyDesc: `Enter the amount of ${config.tokenSymbol} you wish to purchase, then click "Buy"`,
    buyTtl: "Buy",
    payTtl: "Pay",
    benefit1: "เข้าถึง MVP closed beta ที่มีการเข้าถึงเฉพาะ",
    benefit2: "เข้าถึง dev diary",
    benefit3:
      "อาวุธในเกม \n แบบจำกัดตำแหน่งตำแหน่งตำแหน่งตำแหน่งตำแหน่งตำแหน่ง",
    benefit4:
      "ออกจากรายการสีขาวโดยอัตโนมัติสำหรับการขาย NFT ที่จะเกิดขึ้นในอนาคต",
    benefit5: "เข้าร่วมการแข่งขัน phygital",
    benefit6: "และอื่น ๆ!",
    whybuyToken1: "MVP เล่นได้และเวอร์ชันเบต้าจะเปิดใช้ในเดือนพฤษภาคม",
    whybuyToken2: "4 ล้านดาวน์โหลดรวมกันบน Android และ iOS",
    whybuyToken3: "มีรายได้ 6 ล้านเหรียญสำหรับเวอร์ชัน MVP",
    whybuyToken4:
      "แผนอธิบายอย่างละเอียด 2 ปีสำหรับการขยายพัฒนาเกมและเพิ่มผู้ใช้",
    whybuyToken5: "ทีมประกอบด้วยผู้เชี่ยวชาญด้านการพัฒนาเกม",
    approveMessage: `Payment with stablecoins will require confirmation of two transactions: first to approve spending and second to ${config.tokenSymbol} purchase. Stay on the website until the all transactions are confirmed. Only ERC-20 tokens supported.`,
    wygTitle1: "ดาวน์โหลดมากกว่า 4 ล้านครั้งใน App Store และ Playstore",
    wygTitle2: "6M+ USD in revenue from in-app purchases",
    wygTitle3: "4.5 จากคะแนนผู้ใช้เฉลี่ย 5 ดาว star ratings",
    wygTitle4: "การเล่นเกมแคมเปญมากกว่า 250 ชั่วโมง",
    wygTitle5: "มีโหมดเกมแบบอะซิงโครนัสหลายโหมด",
    wygTitle6: "web3 MVP เปิดตัวในเดือนพฤษภาคม 2023",
    wygTitle7: "โครงการดำเนินการโดยทหารผ่านศึกด้านการพัฒนาเกม",
    wygTitle8: "เปิดใช้งานการเล่นข้ามอุปกรณ์เคลื่อนที่และพีซี",
    wygTitle9: "แผนที่ PvP ของผู้เล่น 16 คนที่มีความน่าสนใจอย่างมาก",
    wygTitle10:
      "สนุกกับประสบการณ์เล่นเกมความลื่นไหล 60fps และความละเอียด 4k (บน PC)",
    modeT1: "ล่ามอนสเตอร์",
    modeT2: "ป้อมบอส",
    modeT3: "PvP",
    modeT4: "ดันเจี้ยนรายวัน",
    modeT5: "ดันเจี้ยนกิจกรรม",
    modeT6: "แคมเปญ",
    modeInfo:
      "Swords of Blood MVP มีหลายโหมดเกม! ร่วมกิจกรรมเพื่อรับสิทธิ์เข้าถึงเบต้าปิด (เริ่มต้นในเดือนพฤษภาคม) อย่างพิเศษ",
    aboutDesc1: `นำเสนอการต่อสู้ที่ฉูดฉาด กราฟิกที่โดดเด่น และโหมดเกมที่หลากหลาย ${config.appName} เป็นเกม RPG แฮ็คและสแลช F2P ที่รวดเร็วคุณภาพ AAA เกมแรกในบล็อกเชนที่เปิดตัวใน Polygon`,
    aboutDesc2:
      "ความรุนแรง การหักหลัง และความชั่วร้ายอันเจ้าเล่ห์นำมาซึ่งการล่มสลายอันโหดร้ายของโลกแห่ง Ezura ผู้ทรยศซึ่งเป็นสิ่งมีชีวิตแห่งความชั่วร้ายอันยิ่งใหญ่ได้ทำลายล้างผู้พิทักษ์ที่แข็งแกร่งของอาณาจักรและเป็นเวลา 1,000 ปีที่ความมืดได้ครอบครอง",
    aboutDesc3:
      "เป็นช่วงเวลาแห่งความสิ้นหวัง สิ้นหวัง และความตาย เมื่อกองทัพของผู้ทรยศเข้าปกคลุมแผ่นดิน",
    aboutDesc4:
      "แต่ความรอดที่เป็นไปได้เกิดขึ้นจากซากปรักหักพัง คำสั่งสุดท้ายของนักรบผู้เกรียงไกรได้รับการฟื้นคืนชีพโดยเทพธิดาโบราณที่รู้จักกันในชื่อ Sentinel คุณจะพยายามนำประกายแห่งความหวังมาสู่ดินแดนรกร้างด้วยกัน",
    aboutDesc5:
      "สวมบทบาทเป็นนักตระเวนดันเจี้ยนที่ไร้ความกลัว เป็นนักเวทย์ต่อสู้เพื่อล่าเงินรางวัล หรือนักรบผู้ทรงพลัง เพื่อแสวงหาสมบัติและอุปกรณ์หายาก สร้างอุปกรณ์ระดับมหากาพย์ พลิกโฉมเวทมนตร์แห่งธรรมชาติตามที่คุณต้องการ และล้างแค้นพี่น้องที่ล่วงลับไปแล้วในภารกิจครั้งยิ่งใหญ่แห่งพลังและการแก้แค้น",
    contactUsDesc: `มาเป็นทูต ${config.appName} และรับโทเค็นเกม ทอง และอัญมณี`,
    contactUs: "Contact Us",
    asSeenOnTtl: "ตามที่เห็นบน",
    facTtl1: "ค้นพบโลกที่สวยงามของ Ezura",
    facTtl2: "เชี่ยวชาญอาวุธและองค์ประกอบที่หลากหลาย",
    facTtl3: "สร้างการผสมผสานการโจมตีที่ทำลายล้าง",
    facTtl4: "สร้างอุปกรณ์และอาวุธอันทรงพลังที่ไม่เหมือนใคร",
    facTtl5: "ใช้การเล่นเกมแฮ็คและสแลชเพื่อสังหารคู่ต่อสู้ของคุณ",
    facTtl6: "แข่งขันกับผู้เล่นคนอื่นใน PvP ที่รวดเร็วและโหดร้าย",
    teamName1: "James Seaman",
    teamTtl1: "CEO",
    teamBio1:
      "ผู้คร่ำหวอดในวงการวิดีโอเกมมา 36 ปี ซึ่งทำงานเกี่ยวกับเกมต่างๆ เช่น The Sims, Sims City, Ghost Recon, Rainbow Six และอีกมากมาย) ในหลายระดับ ตั้งแต่การเขียนโปรแกรมจนถึง CEO",
    teamName2: "Jeremy Brown",
    teamTtl2: "COO",
    teamBio2:
      "ทำงานอย่างกว้างขวางในบัญชีการตลาดของ Sony PlayStation และ Xbox รวมถึงเกมที่โด่งดังที่สุดบางเกม เช่น Halo, Call of Duty, Assassin’s Creed และ Tom Clancy",
    teamName3: "Mariusz Szynalik",
    teamTtl3: "Project Director for HitBox Games",
    teamBio3:
      "ประสบการณ์กว่า 10 ปีในฐานะผู้บริหารเกมที่มุ่งเน้นไปที่การเผยแพร่วิดีโอเกมและการขายพีซี/คอนโซลและเกมเล่นฟรีบนมือถือและเกมที่รองรับบล็อกเชน ผู้ร่วมก่อตั้ง Artifex Mundi S.A.",
    teamName4: "Yupeng Qin",
    teamTtl4: "Project Director for Asian Dev Team",
    teamBio4:
      "มีประสบการณ์กว่าสิบปีในการสร้างชุมชน การตลาด การประชาสัมพันธ์และลูกค้าสัมพันธ์ การเขียนและการสร้างเนื้อหา และการจัดการสื่อสังคมออนไลน์ รวมถึงโปรเจ็กต์ใน web3, gamefi และ defi",
    teamName5: "Jakub Szamalek",
    teamTtl5: "Narrative Director",
    teamBio5: "A decade of experience in UI/UX design",
    teamName6: "John Moyer",
    teamTtl6: "Bass Guitarist of the band Disturbed",
    teamBio6:
      "Former Director of Narrative Design for Cyberpunk and The Witcher 3",
    teamName7: "Vee Lozano",
    teamTtl7: "Business Development Lead",
    teamBio7:
      "Star Judge and world champion bladesmith on the History Channel’s hit show, Forged in Fire",
    teamName8: "Jason Hung",
    teamTtl8: "Advisor",
    teamBio8:
      "Lead writer for the upcoming megahit: Gord Author and Hollywood Screenplay Writer",
    teamName9: "Charlie Hu",
    teamTtl9: "Advisor",
    teamName10: "Adam Vine",
    teamTtl10: "Narrative Design Director",
    teamName11: "Ben Abbott",
    teamTtl11: "Weapons Creator and Consultant ",
    teamName12: "Kamran Sadikhov",
    teamTtl12: "UI/UX Designer",
    teamTtl: "Team",
    partnersTtl: "Partners",
    backersTtl: "ผู้สนับสนุน",
    launchPartnTtl: "เปิดตัวพันธมิตร",
    techPartnTtl: "พันธมิตรด้านเทคโนโลยี",
    comPartnTtl: "พันธมิตรชุมชน",
    presTtl: "วิธีการซื้อ",
    presStep1: "ขั้นตอนที่ 1",
    presStep2: "ขั้นตอนที่ 2",
    presStep3: "ขั้นตอนที่ 3",
    presStep1Desc:
      "ขั้นแรก ตรวจสอบให้แน่ใจว่าคุณได้ติดตั้งกระเป๋าเงิน MetaMask บนเบราว์เซอร์ของคุณ หรือใช้หนึ่งในกระเป๋าเงินเพื่อเชื่อมต่อกับหนึ่งในกระเป๋าเงินที่รองรับ (เราขอแนะนำ Trust Wallet)<br/>การซื้อจากเบราว์เซอร์บนเดสก์ท็อปจะทำให้คุณได้รับประสบการณ์การซื้อที่ราบรื่นยิ่งขึ้น สำหรับสิ่งนี้ เราขอแนะนำ Metamask<br/>หากคุณซื้อบนโทรศัพท์มือถือ เราแนะนำให้ใช้ Trust Wallet และเชื่อมต่อผ่านเบราว์เซอร์ในตัว (เพียงคัดลอก https://swordsofblood.com ไปยังเบราว์เซอร์ Trust Wallet)",
    presStep2Desc:
      "เมื่อคุณมีผู้ให้บริการกระเป๋าเงินที่คุณต้องการใช้แล้ว ให้คลิกเชื่อมต่อกระเป๋าเงินแล้วเลือกตัวเลือกที่เหมาะสม ในกรณีของแอพกระเป๋าเงินมือถือ คุณจะต้องเลือก Wallet Connect",
    presStep3Desc: `คุณสามารถซื้อ ${config.tokenSymbol} ด้วย ERC20 ETH, USDT, USDC และ DAI หลังจากช่วงพรีเซลล์ทั้งหมดสิ้นสุดลง คุณจะสามารถขอรับเงิน ${config.tokenSymbol}ของคุณผ่านหน้านี้ได้ โปรดรอการประกาศของเรา`,

    date: {
      Days: "วัน",
      Hours: "ชั่วโมง",
      Minutes: "นาที",
      Seconds: "วินาที",
    },
    timerLabel: "Presale 2 ends in :",
    investorTtl: "นักลงทุนรอบเมล็ดพันธุ์",
  };
}
