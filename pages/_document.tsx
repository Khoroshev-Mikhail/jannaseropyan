import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NPSPM7R" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>
      </Head>
      <body>
        
        <Main />
        <NextScript />

        <div className='hidden'>
          <script 
              dangerouslySetInnerHTML={{__html: `if (awoUtmData === undefined) {
                  var awoUtmData = awoUtmData || {};
                  awoUtmData['subdomain'] = 'easyvoice';
                  (function () {
                    var d = document.createElement('script'); d.type = 'text/javascript'; d.async = true;
                    d.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'easyvoice.autoweboffice.ru/js/utm.js';
                    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(d, s);
                  })();}`
              }} 
          />
          <script 
              dangerouslySetInnerHTML={{
                  __html: `(function(d,b,a){(b[a]=b[a]||[]).push(function(){try{b.yaCounter42372339=new Ya.Metrika({id:42372339,clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0,ecommerce:"dataLayer"})}catch(f){}});var e=d.getElementsByTagName("script")[0],c=d.createElement("script");a=function(){e.parentNode.insertBefore(c,e)};c.type="text/javascript";c.async=!0;c.src="https://mc.yandex.ru/metrika/watch.js";"[object Opera]"==b.opera?d.addEventListener("DOMContentLoaded",a,!1):a()})(document,window,"yandex_metrika_callbacks");`,
              }}
          />
        </div>
      </body>
    </Html>
  )
}
