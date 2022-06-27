import React from 'react';
import Link from 'next/link';

//internal import
import Layout from '@layout/Layout';
import PageHeader from '@component/header/PageHeader';

const TermAndConditions = () => {
  return (
    <Layout
      title="Terms & Conditions"
      description="This is terms and conditions page"
    >
      <PageHeader title="Terms & Conditions" />
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-3 sm:px-10">
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              Terms &amp; Conditions
            </h2>
            <div className="font-sans leading-7">
              <p>
                Welcome to the sites and interactive services owned, operated or provided by Desimart and its subsidiaries and affiliates (the “Company”, Desimart, “we”, “us” or “our”). These Terms of Use together with the Transactional Terms and the Desimart Terms and Conditions set out under those section heading below (collectively the “Terms”) govern your use of DesiGrocersOnline.ca website, mobile site, application, and/or other services, as applicable (collectively, the “Services”).
              </p>
              <p>
                THERE ARE TERMS WHICH LIMIT OUR LIABILITY AND IMPOSE OBLIGATIONS ON YOU. YOU MUST REVIEW THESE TERMS, ALONG WITH ANY POLICIES INCORPORATED BY REFERENCE HEREIN, BEFORE USING THE WEBSITE AND SERVICE.
                BY USING OUR WEBSITE AND SERVICE, YOU, THE USER (HEREIN "YOU" OR "YOUR" OR "CUSTOMER"), REPRESENT AND WARRANT THAT:
                <li>YOU ARE OF THE AGE OF MAJORITY; AND</li>
                <li>YOU HAVE READ AND UNDERSTAND THESE TERMS AND AGREE TO BE BOUND BY THEM.</li>
                IF YOU ARE NOT OF THE AGE OF MAJORITY OR DO NOT AGREE TO THESE TERMS PLEASE STOP USING THE WEBSITE AND SERVICE AND CONTACT US IMMEDIATELY.
              </p>
            </div>
          </div>
          <div className="mb-6 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              Return Policy
            </h2>
            <h4 className='font-semibold'>In Store</h4>
            <div className="font-sans leading-7">
              <p>
                All sales at store are considered final and are not eligible for any refunds.<br />
                Customer is responsible for inspecting all items before they are purchased.<br />
                For products that are covered under Manufacturer's warranty (e.g., Cookware such as pots, pans, pressure cookers, etc.), we strongly recommend customers to reach out to manufacturer of the product if a defect is found before bringing them over to the store.
              </p>
            </div>
            <br />
            <h4 className='font-semibold'>Online Shopping</h4>
            <div className="font-sans leading-7">
              <p>
                All sales using the online channels are considered final and are not eligible for any refunds.<br />
                Refund/Store Credit shall be provided for items that were paid for but were not delivered or a replacement product is provided without your consent. The incident must be reported within 24 hours of delivery/pickup to be eligible.<br />

                For products that are covered under Manufacturer's warranty (e.g., Cookware such as pots, pans, pressure cookers, etc.), we strongly recommend customers to reach out to manufacturer of the product if a defect is found before bringing them over to the store.

              </p>
            </div>
            <br />
            <h4 className='font-semibold'>Restaurant Items</h4>
            <div className="font-sans leading-7">
              <p>
                All restaurant sales of foods/beverages and sweets are considered final and are not eligible for any refunds.<br />

                We make every effort in serving the best quality and delicious food to our customers, but we do understand there may be circumstances where you are not completely satisfied, so please give us a call within 24 hours after order pick up or delivery and we will gladly rectify the situation.
                <br />
                Cancellation for Restaurant Orders must be made 48 hours in advance for any catering orders, and any tray orders.


              </p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              Terms of Use
            </h2>
            <div className="font-sans leading-7">
              <p>
                Please review these terms carefully. By using any of the Services, you accept these Terms. We may modify these Terms at any time, by updating this posting and without notice to you. Your continued use of any of the Services constitutes your acceptance of these Terms.<br />

                This desigrocersonline.ca Website (the "Site") is owned, and operated by, Desimart Inc. and its subsidiaries, with offices located at 2070 Rymal Rd E, Hamilton, ON L0R 1P0 (Store Operating Name: Desi Grocers). Your use of this Site is subject to these Conditions of Use and Protection of Privacy and all applicable laws, which you accept unconditionally by using this Site.

              </p>
            </div>

            <h4 className='font-semibold'>Coupons, points and rewards</h4>
            <div className="font-sans leading-7">
              <p>
                Coupons are subject to the terms and conditions mentioned on the various communication channels using which the coupon is shared. Reward program points and rewards are subject to the Terms and conditions of the program. Desimart reserves the right to refuse to honor coupons, points or rewards if it believes, in its sole discretion, that the person using them has abused or refused to comply with applicable terms and conditions, made a false statement or committed fraud. Desimart reserves the right to suspend, modify or terminate any coupons, points, or rewards programs without prior notice if, in its sole discretion, it determines that the coupons, points or reward program are impaired or corrupted or if any program is deemed illegal.


              </p>
            </div>
            <br />
            <h4 className='font-semibold'>Cookies</h4>
            <div className="font-sans leading-7">
              <p>
                Your consent is required for Desimart to use "cookies", which are small text files copied to your hard disk from the Site. "Cookies" enable Desimart to recognize your browser (the software you use to surf the Internet) when you visit the Site. You may choose at any time not to have "cookies" simply by modifying the configuration of your browser.


              </p>
            </div>
            <br />
            <h4 className='font-semibold'>Hyperlinks</h4>
            <div className="font-sans leading-7">
              <p>
                The Site contains hyperlinks enabling users to visit external Websites, owned and operated by third parties. Desimart has no control over these external Websites and does not guaranty their content. Desimart shall not be held responsible for any damages that you may incur when you are redirected to another Website by way of a hyperlink. The presence, on this Site, of one or many hyperlinks to access a third party Website must under no circumstances be interpreted as an endorsement, by Desimart, of any representation or information contained on any such Website or as a partnership or affiliation with the owner of any such Website.
              </p>
            </div>
            <br />
            <h4 className='font-semibold'>Legal age and protection of children</h4>
            <div className="font-sans leading-7">
              <p>
                Users of this Site must be of legal age in their province of residence. Desimart abides by legal restrictions with respect to advertising to children. Parents shall monitor their children's Internet usage and are responsible, in their capacity as legal guardian, for determining which Website may or may not be appropriate for their children.
              </p>
            </div>
            <br />
            <h4 className='font-semibold'>Use of information</h4>
            <div className="font-sans leading-7">
              <p>
                The information displayed on the Site is provided for informational purposes only, unless otherwise stated. Desimart makes no warranties, either express or implied, that the quality of the offers will meet your expectations and that the information, which includes advertising as well as nutritional and health tips, is appropriate to your needs and condition.
              </p>
            </div>
            <br />
            <h4 className='font-semibold'>Copyright</h4>
            <div className="font-sans leading-7">
              <p>
                All the content of this Site, including the text, logos, images, drawings, graphics, illustrations and photographs, is owned or otherwise provided or used under license by Desimart. Desimart does not represent or warrant that any uploaded content from third parties does not infringe the rights of any third party. All the content of this Site is protected pursuant to the Canadian Copyright Act, the copyright laws of the other countries and under international treaties. Any unauthorized use of the content of this Site, including all reproduction, distribution or redistribution, transmission or retransmission, communication to the public by telecommunication, performance, translation, distribution to the public or downloading is prohibited without prior written authorization of Desimart.
              </p>
            </div>
            <br />
            <h4 className='font-semibold'>Trademarks</h4>
            <div className="font-sans leading-7">
              <p>
                The trademarks displayed on this Site are trademarks, registered or unregistered, of Desimart or third parties, which are the property of their respective owners. The trademarks displayed on this Site cannot be used without prior written authorization of Desimart or their respective owners. No element of this Site shall be interpreted as creating, implicitly or expressly, a license or a right of use or of duplication of a trademark, except with the express written consent of Desimart or the owner of such trademark.
              </p>
            </div>
            <br />
            <h4 className='font-semibold'>Amendments to these Conditions of Use and Protection of Privacy</h4>
            <div className="font-sans leading-7">
              <p>
                Desimart reserves the right at any time and without prior notice to amend these Conditions of Use and Protection of Privacy. You may view them at any time on the Site.
              </p>
            </div>
            <br />
            <h4 className='font-semibold'>Additional conditions of use</h4>
            <div className="font-sans leading-7">
              <p>
                You may be required to comply with additional conditions of use specific to certain programs, offers, promotions, services, social media, third party content and third-party software that will be disclosed to you once you access such programs, offers, promotions, services, social media platforms, content and software.
              </p>
            </div>
            <br />
            <h4 className='font-semibold'>Governing Law</h4>
            <div className="font-sans leading-7">
              <p>
                This Site shall be governed by the laws of Ontario and the applicable laws of Canada without reference to principles of conflict of laws. You agree to be bound by such laws and to submit to the exclusive jurisdiction of the courts of Ontario, located in Toronto, and all courts competent to hear appeals there from, in connection with the interpretation or application of these Conditions of Use and Protection of Privacy. Information from this Site is intended for use only in Ontario and no offer, use or sale is intended where prohibited by law.
              </p>
            </div>
            <br />
            <h4 className='font-semibold'>Protection of personal information</h4>
            <div className="font-sans leading-7">
              <p>
                Desimart is keenly aware of the need to protect the personal information you provide to Desimart while making use of the Site. The following principles governing our collection and use of your personal information:
                <li>Personal information is only gathered with your consent;</li>
                <li>Personal information is kept strictly confidential and secure;</li>
                <li>Personal information is only used for the purposes stated;</li>
                <li>You may have access to your personal information upon request.</li>
              </p>
              <p>
                Desimart collects no personal information concerning you while you are surfing the Site unless you willingly subscribe to a specific service and you provide such information. Please note, however, that certain information is collected automatically whenever you access the Site, but none of this information identifies you personally. Among other data, Desimart notes the domain name and IP address used to access the Site as well as the type of browser and system you are using. Desimart uses this non-personal information that it collects for statistical purposes, to keep track of the number of visits to the Site with a view to continuously improving the Site.
              </p>
              <p>For you to subscribe to DesiGrocersOnline.ca, Desimart asks you to provide your first and last name, e-mail address, postal address, and certain other information. All this information will be used solely to personalize your visit, to provide you with electronic coupons and, should you so wish, to send you information by e-mail. At any time, you may modify the information supplied and the preferences outlined in your user profile in the " My profile " section. You can also ask Desimart to delete your user profile by contacting Desimart's Customer Service at the following address: info@DesiGrocersOnline.ca, or by following the links of the Site to unsubscribe.</p>
              <p>
                We assure you that your personal information will never be disclosed to third parties for marketing purposes. Whenever personal information is disclosed to Desimart’s suppliers and partners, Desimart takes reasonable measures to protect the personal information disclosed under contractual agreements stating the confidentiality of the information and the purposes for which it is intended.
              </p>
              <p>
                We reserve the right to provide your content and information uploaded to our Service to third parties if required by law (such as in response to a subpoena or court order), and to cooperate with law enforcement authorities in the investigation of any criminal or civil matter.
              </p>
            </div>

            <br />
            <h4 className='font-semibold'>Payment Terms</h4>
            <div className="font-sans leading-7">
              <p>
                All payment methods must be valid, authentic and you must be authorized to use them. If a charge is not authorized or accepted, we reserve the right to cancel your order without notice and with no further obligation or liability to you. We reserve the right to change the payment methods that we accept at any time.
              </p>
            </div>
            <br />
            <h4 className='font-semibold'>Product Pricing</h4>
            <div className="font-sans leading-7">
              <p>
                Prices for products are subject to change, without notice. The grocery prices listed on our Website and/or the store may differ from the retail prices charged for such items by other grocery stores. Our prices may be higher or lower than retail prices. Unless otherwise indicated, prices displayed on our Website are quoted in Canadian dollars, prices displayed do not include applicable taxes or delivery charges. You are responsible for paying all fees and applicable taxes associated with products you order with a valid payment method. Items in your shopping cart will always reflect the most recent price displayed on the item's product detail page. This price may differ from the price shown for the item when you first placed it in your cart. Placing an item in your cart doesn't reserve the price shown at that time. It is also possible that an item's price may decrease between the time you place it in your cart and the time you purchase it. Tax charges are based on applicable federal, state, provincial and harmonized sales tax rates based on the delivery address associated with your order.
              </p>
            </div>
            <br />
            <h4 className='font-semibold'>Other Terms</h4>
            <div className="font-sans leading-7">
              <p>
                In the course of using your account with us, you may be required or by your actions may be deemed, to consent to the terms of agreements provided by certain third-party service providers, including but not limited to, payment processors, credit card companies and banks. You agree that nothing in those agreements shall in anyway alter these Terms or your obligations hereunder.
                Any new features that augment or enhance the current Website and Service, including the release of new versions, tools and resources, shall be subject to these Terms. Continued use of the Website and Service after any such changes shall constitute your consent to such changes.

              </p>
            </div>
            <br />
            <h4 className='font-semibold'>Contact us</h4>
            <div className="font-sans leading-7">
              <p>
                For any questions, please contact us:<br />
                DesiGrocers<br />
                C/O Desimart Inc.<br />
                Manager – Customer Services<br />
                2070 Rymal Road East<br />
                Hamilton, Ontario L0R 1P0<br />
                Click “Contact us” on the Site<br />
                1-905-692-1000
              </p>
            </div>
            <div className="my-6 lg:my-8 last:mb-0">
              <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
                Disclaimers
              </h2>
              <div className="font-sans leading-7">
                <p>
                  The information we provide on our Services is believed to be accurate and complete at the time of posting. We attempt to ensure all information remains accurate and current, but we do not guarantee accuracy, completeness, and quality at all times.
                </p>
                <p>
                  The Site is accessible to you based on its availability. While Desimart makes reasonable efforts to maintain the Site free of errors, interruptions and viruses, Desimart makes no warranties, either express or implied, that the Site will operate without interruption, virus or error or in a secure and timely manner, that the information contained on this Site is accurate and without error nor that defects in the software and applications, if any, will be rectified. You alone will be responsible for any damage to your computer and for any loss of data that may result when downloading material.
                </p>
                <p>
                  User ID, password and Security - Despite Desimart's efforts to ensure third parties will not access or obtain personal information concerning you through its Site, complete confidentiality and security cannot be guaranteed currently on the Internet. Communication via the Internet is subject to interception, loss or alteration. You acknowledge and agree that Desimart cannot be held responsible for damages resulting from the transmission of confidential information or personal information over the Internet and that such communications are at your own risk. You alone are responsible for protecting the confidentiality of your user ID and password as well as the confidentiality of any actions undertaken using your identification. Moreover, you are responsible for immediately notifying Desimart about any unauthorized use of your user ID or passwords and any other security breach, as well as for taking every possible precaution to ensure that you use the Site under optimal security conditions.
                </p>
              </div>
            </div>

            <div className="my-6 lg:my-8 last:mb-0">
              <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
                Termination of use
              </h2>
              <div className="font-sans leading-7">
                <p>
                  Desimart reserves the right at any time and without prior notice to terminate your right to access the Site or to close your account for any reason, including the fact that your account is inactive during a period of time as Desimart determines or if Desimart believes, in its sole discretion, that you have violated these Conditions of Use and Protection of Privacy.
                </p>
              </div>
            </div>

            <div className="my-6 lg:my-8 last:mb-0">
              <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
                Indemnity
              </h2>
              <div className="font-sans leading-7">
                <p>
                  You agree to indemnify and hold Desimart, its subsidiaries and affiliates, and each of their directors, officers, agents, contractors, and employees, harmless from and against any loss, liability, claim, demand, damages, costs and expenses, including reasonable attorney’s fees, arising out of or in connection with any User Submissions you post or share on or through the Services, your use of the Services, or any content, information, or products accessed, offered, ordered or purchased through the Services, your conduct in connection with the Services or with other users of the Services, or any violation of these Terms or of any law or the rights of any third party.
                </p>
              </div>
            </div>
            <div className="my-6 lg:my-8 last:mb-0">
              <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
                Limitation of Liability
              </h2>
              <div className="font-sans leading-7">
                <p>
                  DESIMART SHALL NOT BE LIABLE FOR ANY LOSS, DAMAGES OR CLAIMS OF ANY KIND, EITHER DIRECT OR INDIRECT, INCIDENTAL, EXEMPLARY, SPECIAL OR CONSEQUENTIAL, INCLUDING THE LOSS, ALTERATION, COMMUNICATION OF DATA, ANY DELAY, FORCE MAJEURE, PRODUCT/SERVICE PRICE OR ATTRIBUTE ERRORS, PRODUCT ERRORS, SUBSTITUTIONS, MISSING PRODUCTS, INACCURATE PRODUCT/SERVICE DESCRIPTIONS (collectively "DAMAGES"), WHETHER OR NOT IT HAS BEEN INFORMED OF THE POSSIBILITY OF SUCH ISSUES RESULTING FROM THE USE OF THIS SITE AND/OR ANY UNASSEMBLED OR UNDELIVERED ORDER (OTHER THAN REFUNDING THE ORDER IF IT WAS PAID FOR).
                </p>
                <p>
                  Your sole and exclusive remedy is to discontinue using this Site and/or to ask, in person at the Designated Store, for a refund or exchange of the products in question depending on the Designated Store’s refund and exchange policy.
                </p>
                <p>
                  No information on this Site may be construed as creating any warranty not expressly stipulated in these Terms.
                </p>
                <p>
                  Desimart shall not be responsible for checking the presence of any allergens whatever in substitute products or any other products, this responsibility is solely yours, even should Desimart have prior notice of same.
                </p>
                <p>
                  This limitation of liability applies to all stores and restaurants owned and operated by Desimart Inc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermAndConditions;
