// CSS and SASS files
import './index.scss';
// JS libraries
import tingle from 'tingle.js';
import FloatingPrompt from 'producthunt-floating-prompt';

FloatingPrompt({name:'Learning Lab', url:'https://www.producthunt.com/posts/learning-lab'});

const modal = new tingle.modal({
  footer: false,
  stickyFooter: false,
  closeMethods: ['button'],
  closeLabel: "Close"
});

const modalNewsletter = new tingle.modal({
  footer: false,
  stickyFooter: false,
  closeMethods: ['button'],
  closeLabel: "Close"
});

modalNewsletter.setContent(
  `<!-- Begin Mailchimp Signup Form -->
  <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
  <style type="text/css">
    #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
    /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
       We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
  </style>
  <div id="mc_embed_signup">
  <form action="https://uno.us1.list-manage.com/subscribe/post?u=e5e5da3436bd7f2c2188e6bff&amp;id=9c44d010ca" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
      <div id="mc_embed_signup_scroll">
    <h2>Sign up for my newsletter!</h2>
    <p>Get notified about the new Learning topic of the month</p>
  <div class="mc-field-group">
    <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="Email">
  </div>
    <div id="mce-responses" class="clear">
      <div class="response" id="mce-error-response" style="display:none"></div>
      <div class="response" id="mce-success-response" style="display:none"></div>
    </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
      <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_e5e5da3436bd7f2c2188e6bff_9c44d010ca" tabindex="-1" value=""></div>
      <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
      </div>
  </form>
  </div>
  <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
  <!--End mc_embed_signup-->`
);

document.getElementById('newsletter-register').addEventListener("click", function() {
  modalNewsletter.open();
});

const modalLinks = document.getElementsByClassName('modal-link');
const form = document.getElementById('netlify-form');
const inputLabels = {
  'resource': 'Resource URL',
  'experience': 'Experience URL of blog post',
  'project idea': 'Describe the project idea',
  'project carried out': 'Project URL',
  'topic': 'Topic name'
};

modal.setContent(
  '<h2 id="modal-title"></h2>'
);

for (let i = 0; i < modalLinks.length; i++) {
  modalLinks[i].addEventListener("click", function() {
    const title = modalLinks[i].getAttribute('title');
    const modalTitle = document.getElementById('modal-title');
    const inputType = document.getElementById('form-input-type');
    const inputLabel = document.getElementById('form-input-label');
    // const inputValue = document.getElementById('form-input-value');

    modalTitle.innerHTML = 'New ' + title;
    inputType.value = title;
    inputLabel.innerHTML = inputLabels[title];
    // inputValue.placeholder = inputLabels[title];

    modalTitle.after(form);
    form.style.display = 'block';
    modal.open();
  });
}