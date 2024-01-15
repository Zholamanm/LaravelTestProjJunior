<script>
import {defineComponent} from 'vue'
import axios from "axios";

export default defineComponent({
  name: "Show",
  mounted() {
    $(document).trigger('initJQuery')
    this.getProduct()
  },

  data() {
    return {
      product: [],
      catgeory: '',
      count: 0,
    }
  },

  methods: {
    getProduct(id) {
      this.axios.get(`http://localhost:8876/api/products/${this.$route.params.id}`)
          .then(res => {
            console.log(res.data.data);
            this.product = res.data.data
            this.catgeory = this.product.category.title
            this.$nextTick(() => {
              if ($(".varients").length) {
                $(".varients li a").on("click", function () {
                  var $this = $(this),
                      img_src = $this.data('src');
                  var target_slider = $('.single-product-box .big-product').find('.slick-slide.slick-current.slick-active');
                  target_slider.find('img').attr('src', img_src);
                });
              }
              $(".single-product-one").slick({
                dots: false,
                infinite: false,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                autoplay: true,
                prevArrow: '<button class="arrow-back"><i class="flaticon-left-arrow-1"></i> </button>',
                nextArrow: '<button class="arrow-next"><i class="flaticon-next-1"></i></button>',
                autoplaySpeed: 4000,
                asNavFor: '.slider-nav',
                pauseOnHover: false
              });
              $(".single-product-one-nav").slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: '.slider-for',
                dots: false,
                focusOnSelect: true,
                infinite: false,
                speed: 300,
                arrows: true,
                autoplay: true,
                autoplaySpeed: 4000,
                prevArrow: '<button class="arrow-back"><i class="flaticon-left-arrow-1"></i> </button>',
                nextArrow: '<button class="arrow-next"><i class="flaticon-next-1"></i></button>',
                pauseOnHover: false
              });
            })

          })
          .finally(v => {
            $(document).trigger('initJQuery')
          })
    },
    increaseCount() {
      this.count += 1
    },
    decreaseCount() {
      if (this.count != 0) {
        this.count -= 1
      }
    },
  },
})
</script>

<template>
  <div>
    <main>
      <!--Start Shop Details Breadcrumb-->
      <div class="shop-details-breadcrumb wow fadeInUp animated overflow-hidden ">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="shop-details-inner">
                <ul class="shop-details-menu">
                  <li><a href="index.html">Home</a></li>
                  <li class="active">Shop Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--End Shop Details Breadcrumb-->
      <!--Start Shop Details Top-->
      <section class="shop-details-top two ">
        <div class="container">
          <div class="row mt--30">
            <div class="col-xl-6 col-lg-6 mt-30 wow fadeInUp animated">
              <div class="single-product-box one">
                <div class="big-product single-product-one slider-for">
                  <div>
                    <div class="single-item"><img :src="product.image_url" style="width: 255px; height: 310px;" alt="">
                      <div class="ptag"><span class="one">-20% </span></div>
                      <a href="#0"
                         class="love"> <i class="flaticon-like"></i> </a>
                    </div>
                  </div>
                  <div v-for="image in product.product_images">
                    <div class="single-item"><img :src="image.filepath" style="width: 255px; height: 310px;" alt="">
                      <div class="ptag"><span class="one">-20% </span></div>
                      <a href="#0"
                         class="love"> <i class="flaticon-like"></i> </a>
                    </div>
                  </div>
                </div>
                <div class="navholder">
                  <div class="product-slicknav single-product-one-nav slider-nav">
                    <div> <span class="single-item"> <img
                        :src="product.image_url" style="width: 120px; height: 120px;" alt=""> </span>
                    </div>
                    <div v-for="image in product.product_images"> <span class="single-item"> <img
                        :src="image.filepath" style="width: 120px; height: 120px;" alt=""> </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 mt-30 wow fadeInUp animated">
              <div class="shop-details-top-right ">
                <div class="shop-details-top-right-content-box">
                  <div class="shop-details-top-title">
                    <h3>{{ product.title }}</h3>
                  </div>
                  <div class="shop-details-top-price-box">
                    <h3>${{product.price}}
                      <del>$50.00</del>
                    </h3>
                  </div>
                  <div class="shop-details-top-color-sky-box">
                    <div class="color-varient">

                        <a v-for="color in product.color" href="#0" :style="`background: #${color.title}`" class="color-name"> <span>{{color.title}}</span> </a>

                    </div>
                  </div>
                  <div class="product-quantity mb-4">
                    <h4>Quantity</h4>
                    <div class="product-quantity-box d-flex align-items-center flex-wrap">
                      <div class="qty mr-2">
                        <div class="qtySelector text-center"> <span class="decreaseQty"
                                                                    @click.prevent="decreaseCount"><i
                            class="flaticon-minus"></i> </span> <input type="number"
                                                                       class="qtyValue1" v-model="count" value="0"/>
                          <span
                              class="increaseQty" @click="increaseCount"> <i
                              class="flaticon-plus"></i> </span></div>
                      </div>
                      <div v-if="product.count !== 0" class="product-quantity-check"><i class="flaticon-select"></i>
                        <p>In Stock</p>
                      </div>
                    </div>
                  </div>
                  <div v-if="product.count < 50" class="shop-details-top-order-now"><i class="flaticon-point"></i>
                    <p>Order Now, Only {{ product.count }} Left !</p>
                  </div>
                  <div class="shop-details-top-cart-box-btn">
                    <button class="btn--primary style2 "
                            type="submit">Add to Cart
                    </button>
                  </div>
                  <div class="checked-box">
                    <form>
                      <div class="form-group"><input type="checkbox" id="html"> <label for="html">I
                        agree with all company terms & condition</label></div>
                    </form>
                  </div>
                  <div class="shop-details-top-buy-now-btn"><a href="#" class="btn--primary">Buy It
                    Now</a></div>
                  <ul class="shop-details-top-category-tags mt-4">
                    <li>Category: <span>{{ catgeory }}</span></li>
                    <li>Tags: <span v-for="tag in product.tag">{{ tag.title }}</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--End Shop Details Top-->
      <!-- productdrescription-tabStart -->
      <section class="product pt-60 pb-60 wow fadeInUp overflow-hidden ">
        <div class="container">
          <div class="row wow fadeInUp animated">
            <div class="col-12">
              <ul class="nav product-details-nav nav-one nav-pills justify-content-center" id="pills-tab-two"
                  role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active"
                          id="pills-description-tab" data-bs-toggle="pill" data-bs-target="#pills-description"
                          type="button" role="tab" aria-controls="pills-description" aria-selected="true">
                    Description
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pills-additional-tab"
                          data-bs-toggle="pill" data-bs-target="#pills-additional" type="button" role="tab"
                          aria-controls="pills-additional" aria-selected="false"> Additional
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pills-sizechart-tab"
                          data-bs-toggle="pill" data-bs-target="#pills-sizechart" type="button" role="tab"
                          aria-controls="pills-sizechart" aria-selected="false"> Size Chart
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div class="row wow fadeInUp animated">
            <div class="tab-content" id="pills-tabContent-two">
              <div class="tab-pane fade show active" id="pills-description" role="tabpanel"
                   aria-labelledby="pills-description-tab">
                <div class="product-drescription">
                  <h4> Product Details:</h4>
                  <p> {{ product.description }} </p>
                </div>
              </div>
              <div class="tab-pane fade" id="pills-additional" role="tabpanel"
                   aria-labelledby="pills-additional-tab">
                <div class="product-drescription">
                  <p class="pt-0"> {{ product.content }} </p>
                </div>
              </div>
              <div class="tab-pane fade" id="pills-sizechart" role="tabpanel"
                   aria-labelledby="pills-sizechart-tab">
                <div class="product-drescription">
                  <div class="size-chirt">
                    <h4>Size Guide</h4>
                    <p class="pt-0"> Assertively conceptualize parallel process improvements through
                      user friendly colighue to action items. </p>
                    <div class="size-tabble">
                      <table>
                        <thead>
                        <tr>
                          <th>Size</th>
                          <th>XXS - XS</th>
                          <th>XS - S</th>
                          <th>S - M</th>
                          <th>M - L</th>
                          <th>L - XL</th>
                          <th>XL - XXL</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>ARGENTINA</td>
                          <td>7</td>
                          <td>8</td>
                          <td>9</td>
                          <td>10</td>
                          <td>11</td>
                          <td>12</td>
                        </tr>
                        <tr>
                          <td>BOLIVIA</td>
                          <td>8</td>
                          <td>9</td>
                          <td>10</td>
                          <td>11</td>
                          <td>12</td>
                          <td>13</td>
                        </tr>
                        <tr>
                          <td>COLOMBIA</td>
                          <td>26</td>
                          <td>28</td>
                          <td>30</td>
                          <td>32</td>
                          <td>34</td>
                          <td>36</td>
                        </tr>
                        <tr>
                          <td>China</td>
                          <td>34</td>
                          <td>36</td>
                          <td>38</td>
                          <td>40</td>
                          <td>42</td>
                          <td>44</td>
                        </tr>
                        <tr>
                          <td>MEXICO</td>
                          <td>32</td>
                          <td>34</td>
                          <td>36</td>
                          <td>38</td>
                          <td>40</td>
                          <td>42</td>
                        </tr>
                        <tr>
                          <td>JAMAICA</td>
                          <td>40</td>
                          <td>42</td>
                          <td>44</td>
                          <td>46</td>
                          <td>48</td>
                          <td>50</td>
                        </tr>
                        <tr>
                          <td>MEXICO</td>
                          <td>32</td>
                          <td>34</td>
                          <td>36</td>
                          <td>38</td>
                          <td>40</td>
                          <td>42</td>
                        </tr>
                        <tr>
                          <td>Australia</td>
                          <td>6</td>
                          <td>8</td>
                          <td>10</td>
                          <td>12</td>
                          <td>14</td>
                          <td>16</td>
                        </tr>
                        <tr>
                          <td>USA</td>
                          <td>33</td>
                          <td>44</td>
                          <td>55</td>
                          <td>66</td>
                          <td>77</td>
                          <td>88</td>
                        </tr>
                        <tr>
                          <td>UK</td>
                          <td>6</td>
                          <td>8</td>
                          <td>10</td>
                          <td>12</td>
                          <td>14</td>
                          <td>16</td>
                        </tr>
                        <tr>
                          <td><strong>Pant</strong></td>
                          <td>22-23</td>
                          <td>24-25</td>
                          <td>26-27</td>
                          <td>28-29</td>
                          <td>30-31</td>
                          <td>32-33</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="pills-review" role="tabpanel" aria-labelledby="pills-review-tab">
                <div class="product-drescription">
                  <div class="review-single pt-0 hed">
                    <div class="ratting"><i class="flaticon-star-1"></i> <i
                        class="flaticon-star-1"></i> <i class="flaticon-star-1"></i> <i
                        class="flaticon-star-1"></i> <i class="flaticon-star-1"></i> <span
                        class="ps-2">BASED ON 100 REVIEW</span></div>
                  </div>
                  <div class="review-single">
                    <div class="left">
                      <div class="ratting"><i class="flaticon-star-1"></i> <i
                          class="flaticon-star-1"></i> <i class="flaticon-star-1"></i> <i
                          class="flaticon-star-1"></i> <i class="flaticon-star-1"></i></div>
                      <h6>Vary Good quality Theme <span>Raul Bates on January 28, 2022</span></h6>
                      <p> Assertively conceptualize parallel process improvements through user
                        friendly colighue to action items. Interactively antidos cultivate
                        interdependent customer service without clicks-and-mortar e-services. </p>
                    </div>
                    <a href="#0" class="right-box"> Report this Comments </a>
                  </div>
                  <div class="review-single">
                    <div class="left">
                      <div class="ratting"><i class="flaticon-star-1"></i> <i
                          class="flaticon-star-1"></i> <i class="flaticon-star-1"></i> <i
                          class="flaticon-star-1"></i> <i class="flaticon-star-1"></i></div>
                      <h6> Amazing Theme <span>Kurt Morgan on January 28, 2022</span></h6>
                      <p> Assertively conceptualize parallel process improvements through user
                        friendly colighue to action items. Interactively antidos cultivate
                        interdependent customer service without clicks-and-mortar e-services. </p>
                    </div>
                    <a href="#0" class="right-box">Report this Comments </a>
                  </div>
                  <div class="review-from-box mt-30">
                    <h6>Write a Review</h6>
                    <form action="#" class="review-from">
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="ratting-box">
                            <p> RATING </p>
                            <div class="ratting"><i class="flaticon-star-1"></i> <i
                                class="flaticon-star-1"></i> <i class="flaticon-star-1"></i>
                              <i class="flaticon-star-1"></i> <i class="flaticon-star-1"></i>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="form-group"><label for="name">NAME</label> <input
                              type="text" id="name" class="form-control"
                              placeholder="David Warner"></div>
                        </div>
                        <div class="col-lg-6">
                          <div class="form-group"><label for="number">Number</label> <input
                              type="text" id="number" class="form-control"
                              placeholder="Phone Number"></div>
                        </div>
                        <div class="col-lg-6">
                          <div class="form-group"><label for="email"> Email </label> <input
                              type="text" id="email" class="form-control"
                              placeholder="support@gmail.com"></div>
                        </div>
                        <div class="col-lg-6">
                          <div class="form-group"><label for="namee"> REVIEW TITLE</label> <input
                              type="text" id="namee" class="form-control"
                              placeholder="Give your review title"></div>
                        </div>
                        <div class="col-12">
                          <div class="form-group m-0"><label for="email">BODY OF REVIEW (1500)
                          </label> <textarea
                              placeholder="Write Your Comments Here"></textarea></div>
                        </div>
                      </div>
                      <button type="submit" class="btn--primary style2 ">Submit Review
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> <!-- productdrescription-tab End -->
      <!-- recent-products Start -->
    </main>
  </div>
</template>

<style scoped>

</style>