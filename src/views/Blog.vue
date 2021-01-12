<template>
  <section class="box-content box-5 box-style-3" id="nav-blog">
    <div class="container">
      <div class="row heading">
        <div class="col-lg-12">
          <h2>OUR <span>BLOG</span></h2>
          <hr class="line" />
          <div class="intro">Lorem ipsum dolor sit amet</div>
        </div>
      </div>
      <div class="row col-md-6" v-for="item in info" :key="item.id">
        <div class="col-md-12">
          <div class="box-item">
            <div class="content">
              <h3>{{ item.head }}</h3>
              <p>
                {{ item.content }}
              </p>
              <div class="col-md-4">
                <a class="btn btn-1" href="single.html">Read More</a>
              </div>
              <div class="col-md-3">
                <button v-bind:class="{ cs: hasExisted(item.id) }" v-on:click=" () => { { item. starsL += 1; } addLike(item.id); } " > ❤<span>{{ item.starsL }}</span> </button>
              </div>
              <div class="col-md-5" style="margin-top:32px">
                <span>{{item.date}} BY {{item.author}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
var info = [
  {
    author: "CG",
    content:
      "ceshi 测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
    date: "2020-12-10",
    head: "测试1",
    id: 1,
    imgs: "images/11.jpg",
    starsL: 9,
  },
];
export default {
  name: "BlogPage",
  data() {
    return {
      islike: [],
      info: null,
      num:0
    };
  },
  methods: {
    story() {
      this.axios.get("/api/blog.do?method=blog").then((response) => {
        console.log(response);
        this.info = response.data;
      });
    },
    hasExisted(id) {
      const set = new Set(this.islike);
      if (set.has(id)) {
        return true;
      } else {
        return false;
      }
    },
    addLike(id) {
        this.islike.push(id);
        this.axios({
          url:'/api/blog.do',
          method: 'get',
          params: {
            method: 'get',
            id:id,
            num:10
          }
        })
    },
  },
  mounted() {
    this.story();
  },
};
</script>

<style scoped>
.like {
  font-size: 15px;
  color: #ccc;
  cursor: pointer;
}
.cs {
  font-size: 15px;
  color: #f00;
  cursor: pointer;
}
</style>