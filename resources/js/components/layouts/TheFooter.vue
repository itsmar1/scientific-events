<template>
<section v-if="!isAuthenticated">
<div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-5 col-sm-6">
            <router-link class="elite-corp" to="/"><span class="elite">Scientific</span><span class="corp">Event</span></router-link>
            <p class="footer-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, ut labore et dolore magna aliqua. Ut enim ad minim veniam. quis nostrud exercitation ullamco laboris commodo conse.</p>
            <a class="read-more" href="#"><i class="fas fa-chevron-circle-right mr-1"></i> Read more</a>
          </div>
          <div class="col-md-4 col-sm-6">
            <h4>Helpful Links</h4>
            <div class="row">
              <div class="col-6">
                <ul>
                  <li><a href="#"><i class="fas fa-chevron-right mr-1"></i> About</a></li>
                  <li><a href="#"><i class="fas fa-chevron-right mr-1"></i> Portfolio</a></li>
                  <li><a href="#"><i class="fas fa-chevron-right mr-1"></i> Team</a></li>
                  <li><a href="#"><i class="fas fa-chevron-right mr-1"></i> Pricing</a></li>
                  <li><a href="#"><i class="fas fa-chevron-right mr-1"></i> Privacy Policy</a></li>
                </ul>
              </div>
              <div class="col-6">
                <ul class="list-unstyled">
                  <li><a href="#"><i class="fas fa-chevron-right mr-1"></i> FAQ</a></li>
                  <li><a href="#"><i class="fas fa-chevron-right mr-1"></i> Blog</a></li>
                  <li><a href="#"><i class="fas fa-chevron-right mr-1"></i> How It Works</a></li>
                  <li><a href="#"><i class="fas fa-chevron-right mr-1"></i> Benefits</a></li>
                  <li><a href="#"><i class="fas fa-chevron-right mr-1"></i> Pricing</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-12 contact-us-f">
            <h4>contact us</h4>
            <p class="f-contact">54958 Levo Road Near Red Fort, U.S</p>
            <a href="tel:012-345-678"><i class="fa fa-phone fa-flip-horizontal mr-1"></i><span> Phone: </span>012-12345678</a>
            <a href="mailto:info@elitecorp.info"><i class="fas fa-envelope mr-1"></i><span> Email: </span>support@scientevents.com</a>
          </div>
        </div>
      </div>
    </div>


    <!-- Start Copyright -->
    <div class="copyright">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 text-left">
            <p>COPYRIGHT 2021 ScienceEvents &copy; ALL RIGHTS RESERVED</p>
          </div>
          <div class="col-sm-6 text-right">
            <ul>
              <li><a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
              <li><a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a></li>
              <li><a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
              <li><a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a></li>
              <li><a href="https://www.pinterest.com/" target="_blank"><i class="fab fa-pinterest-p"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

</section>
</template>

<script>
export default {
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }

    }

}
</script>

<style>

</style>
