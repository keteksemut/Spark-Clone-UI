import { useEffect, useState } from "react";
import { fetchSparkInfo } from "@/libs/fetchSparkInfo";
import HeaderComp from "@/comps/Header";
import FooterComp from "@/comps/FooterComp";

const o = JSON.parse(
  '{"G":[{"_type":"navigationItem","href":"/savings","title":"Savings"},{"_type":"navigationItem","href":"/borrow","title":"SparkLend"},{"_type":"navigationItem","href":"/spk","title":"SPK"}],"UY":[{"title":"Socials","childItems":[{"_type":"navigationItem","href":"https://x.com/sparkdotfi","title":"X"},{"_type":"navigationItem","href":"https://discord.gg/sparkdotfi","title":"Discord"},{"_type":"navigationItem","href":"https://blog.spark.fi","title":"Blog"},{"_type":"navigationItem","href":"https://t.me/sparkdotfi_chat","title":"Telegram"},{"_type":"navigationItem","href":"https://www.youtube.com/@sparkdotfi","title":"Youtube"},{"_type":"navigationItem","title":"GitHub","href":"https://github.com/sparkdotfi"},{"_type":"navigationItem","title":"Forum","href":"https://forum.sky.money/c/spark-subdao/84"}]},{"_type":"navigationItem","title":"GitHub ","href":"https://github.com/sparkdotfi"},{"_type":"navigationItem","title":"Forum ","href":"https://forum.sky.money/c/spark-subdao/84"}],"nf":[{"_type":"navigationItem","childItems":[{"_type":"navigationItem","href":"https://docs.spark.fi/faq","title":"FAQ","hasIcon":true},{"_type":"navigationItem","href":"https://docs.spark.fi/","title":"Docs","hasIcon":true},{"_type":"navigationItem","href":"https://devs.spark.fi/security/security-and-audits","title":"Audits","hasIcon":true}],"title":"Learn"}],"$o":[{"_type":"navigationItem","childItems":[{"_type":"navigationItem","href":"https://app.spark.fi/borrow","title":"Borrow USDS at ${value}","sparkInfoId":"sparklendUsdsBorrowRate"},{"_type":"navigationItem","href":"https://app.spark.fi/savings","title":"Earn ${value} with Savings","sparkInfoId":"ssr"}],"title":"Open Spark"}]}',
);
const i = JSON.parse(
  '{"link":"https://app.spark.fi/spk/airdrop","linkLabel":"<strong>The Spark Ignition Airdrop is Live!</strong> Claim your SPK now <here>","date":"06.16.2025"}',
);
const s = JSON.parse(
  '{"title":"Open the app and start growing right now!","link":"https://app.spark.fi/","linkLabel":"Launch app","navigation":[{"navTitle":"Spark","navItems":[{"link":"/savings","linkLabel":"Savings"},{"link":"/borrow","linkLabel":"SparkLend"},{"link":"/spk","linkLabel":"SPK"}]},{"navTitle":"Learn","navItems":[{"link":"https://immunefi.com/bug-bounty/sparklend/information/","linkLabel":"Bug bounty"},{"link":"https://devs.spark.fi/security/security-and-audits","linkLabel":"Audits"},{"link":"https://docs.spark.fi/faq","linkLabel":"FAQ"},{"link":"https://docs.spark.fi/","linkLabel":"Docs"},{"link":"https://docs.spark.fi/brand","linkLabel":"Brand"}]},{"navTitle":"Socials","navItems":[{"link":"https://x.com/sparkdotfi","linkLabel":"X"},{"link":"https://discord.gg/sparkdotfi","linkLabel":"Discord"},{"link":"https://blog.spark.fi","linkLabel":"Blog"},{"link":"https://t.me/sparkdotfi_chat","linkLabel":"Telegram"},{"link":"https://www.youtube.com/@sparkdotfi","linkLabel":"Youtube"}]}],"additionalLinks":[{"link":"/privacy-policy","linkLabel":"Privacy policy"},{"link":"/terms-of-use","linkLabel":"Terms of use"},{"link":"https://docs.spark.fi/mica","linkLabel":"MiCA"}]}',
);

export default function SparkLayout({ children, sparkInfo }) {
  const [showExtraContent, setShowExtraContent] = useState(true);
  const [info, setInfo] = useState(sparkInfo ?? null);

  useEffect(() => {
    if (document.getElementById("not-found")) {
      setShowExtraContent(false);
    }
  }, []);

  useEffect(() => {
    if (!sparkInfo) {
      setTimeout(async () => {
        const fetchedInfo = await fetchSparkInfo();
        setInfo(fetchedInfo);
      }, 100);
    }
  }, [sparkInfo]);

  return (
    <>
      <HeaderComp
        navigation={o.G}
        socials={o.UY}
        mainLinks={o.$o}
        banner={i}
        learn={o.nf}
        id="header"
        buttons={null}
        sparkInfo={info}
      />
      <main>{children}</main>
      {showExtraContent && <FooterComp content={s} />}
    </>
  );
}
