<template>
  <section class="box-content box-2" id="nav-story">
    <div class="container">
      <div class="row heading">
        <div class="col-lg-12">
          <h2>我们 <span>的</span> 故事</h2>
          <hr class="line" />
          <a class="btn btn-1" href="single.html">Read More</a>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <ul class="timeline" v-for="(item, index) in info" :key="item.sid">
            <li v-bind:class="{ 'timeline-inverted': index % 2 === 1 }">
              <div class="timeline-image">
                <i class="fa fa-heart-o"></i>
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>{{ item.head }}</h4>
                  <span>{{ item.sdata }} IN {{ item.location }}</span>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">{{ item.scontent }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
var info1 = [
  {
    head: "第一次相遇",
    location: "QQ",
    scontent: "2018/11/13那个下午，一句“你在哪儿读研究生哇”让我们相遇。",
    sdata: "2018-11-13",
    sid: 1,
  },
  {
    head: "在一起",
    location: "QQ",
    scontent: "2019/5/20.我们打赌。晚上我们决定在一起。",
    sdata: "2019-05-22",
    sid: 2,
  },
  {
    head: "第一次见面",
    location: "成都",
    scontent: "哇，你好乖啊",
    sdata: "2019-05-24",
    sid: 3,
  },
];
export default {
  name: "StoryPage",
  data() {
    return {
      info: null,
    };
  },
  methods: {
    story() {
      this.axios.get("/api/story.do?method=story").then((response) => {
        console.log(response);
        this.info = response.data;
      });
    },
  },
  mounted() {
    this.story();
  },
};
</script>
