<!--
 * @Author: 郑钊宇
 * @Date: 2021-10-12 09:12:39
 * @LastEditTime: 2021-11-02 10:07:03
 * @LastEditors: 郑钊宇
 * @Description: 首页
-->

<template>
<div id="top">
   
  <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <header class="masthead mb-auto">
      <div class="inner">
        <router-link to="/">
          <h3 class="masthead-brand">CLASSIFIER</h3>
        </router-link>
        
        <nav class="nav nav-masthead justify-content-center">
          <router-link class="nav-link" to="/">
            主页
          </router-link>
          <router-link class="nav-link" v-if="!isLogin" :to="{path:'/personal/login'}">
            登录
          </router-link>
          <router-link class="nav-link" v-if="!isLogin" :to="{path:'/personal/register'}">
            注册
          </router-link>
          <router-link id="info" class="nav-link" v-if="isLogin" :to="{path:'/personal/info'}">
            {{this.username}}
          </router-link>
        </nav>
      </div>
    </header>

    <main role="main" class="inner cover my-login-page" id="main">
      <section class="h-100">
        <div class="container h-100">
          <div class="row justify-content-md-center h-100">
            <div class="card-wrapper">
              <div class="card fat container">
                <h2 class="card-title">文献标引分类</h2>
                <div class="row">
                  <div class="card-body col-md-6">
                    
                    <form class="my-login-validation" novalidate="">
                      <div class="form-group">
                        <label for="title">标题</label>
                        <input id="title" type="text" v-model="document.title" class="form-control" required autofocus>
                        <div class="invalid-feedback">
                          标题不能为空
                        </div>
                      </div>

                      <div class="form-group">
                        <label for="abstract">摘要</label>
                        <input id="abstract" type="text" v-model="document.abstract" class="form-control" required>
                        <div class="invalid-feedback">
                          摘要不能为空
                        </div>
                      </div>

                      <div class="form-group">
                        <label for="keyword">关键词</label>
                        <input id="keyword" type="text" v-model="document.keyword" class="form-control" required>
                        <div class="invalid-feedback">
                          关键词不能为空
                        </div>
                      </div>

                      <div class="form-group">
                        <label for="text">正文</label>
                        <textarea id="text" type="text" v-model="document.text" class="form-control" rows="5" required></textarea>
                        <div class="invalid-feedback">
                          正文不能为空
                        </div>
                      </div>
                      <br/>

                      <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-block" @click="classifierFun">
                          提交
                        </button>
                      </div>
                    </form>
                  </div>

                  <div class="card-body col-md-6">
                    <div class="row" style="height: 6rem;">
                        <div class="col-md-6">
                          <label>分类结果</label>
                          <div>{{result.category}}</div>
                        </div>
                      
                      <div class="col-md-6">
                        <label>关键短语</label>
                        <div v-for="(item, index) in result.keyPhrases" :key="index">
                          {{item}}
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div>
                        <label>关键词</label>
                        <div v-for="(item, index) in result.keywords" :key="index">
                          {{item.word}}&nbsp;{{item.weight}}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>


    <footer class="mastfoot mt-auto">
    </footer>
    
  </div>

</div>
</template>

<script>
  export default {
    name: 'Classifier',
    components: {},
    props: {},
    data() {
      return {
        isLogin: false,
        username: '',
        document: {
          title: '浅谈城市新区建设片区路网规划与设计',
          abstract: '近年来，城市化、城镇化发展迅速，人口不断增长，城镇化建设规模扩大。由于受到用地条件的限制，城区交通拥堵严重，城区建设瓶颈难以打破，建设城市新区成为现代城市发展的必然选择。城市新区建设片区路网规划与设计能紧密结合新区的开发及利用，通过合理布局，避免工程之间相互脱节，使得新城区与老城区合为一体，相互促进、共同发展。本文通过分析广东省湛江市东海岛石化产业园片区路网规划和设计实例，简单归纳总结了新区建设中片区路网规划设计方法。',
          keyword: '城市新区；片区路网；规划；设计',
          text: '随着城市化、城镇化发展规模的不断扩大，老城区建设发展产生了一系列的问题，包括城市交通拥堵、绿化面积减少、城市环境及居住条件变差等，建设城市新区已成为现代城市发展的必然选择。城市新区片区路网规划与设计是城市新区建设、保障经济发展最重要的前提之一。城市新区路网建设要临近老城区，通过规划合理布局，使新城区与老城区合为一体，相互促进、共同发展。本文通过对广东省湛江市东海岛石化产业园区路网规划与设计要点实例的探讨，为新区片区路网规划与设计提供参考。1 城市新区片区路网特点（1）规划路网范围大、内容多、影响制约因素多。城市新区规划建设通常包含地块开发、市政路网建设、规划市政管线建设、规划河道，部分需要考虑地铁、铁路及有轨电车等市政交通基础设施。片区路网建设首先要结合规划用地性质，根据不同的用地性质规划路网的道路等级、红线宽度及平面走向。规划路网设计要综合考虑上述制约，各项因素要素谋篇布局。（2）片区路网交通组成多样、功能多样。道路的组成部分包括机动车道、非机动车道和人行道，城市片区路网需要结合用地性质，合理布设道路横断面，既要保证交通通行能力，又要保证人行及非机动路权，同时结合片区景观绿化、照明等提供公共空间功能。（3）有效衔接各专业关系，地上、地下空间的一体化协同设计，红线内外空间统筹考虑。作为城市中的线性空间是城市公共空间，道路的重要组成部分，在城市规划建设中占据非常重要的地位。在过去快速的城市建设中，城市道路空间没有被充分利用或合理利用的现象普遍存在。城市新区片区路网规划与设计应将红线内的道路工程、交通工程、市政工程、绿化景观工程等各专业做好有效梳理和衔接，做好前期规划，为后续各专业精细化设计提供互相融合、和谐有序的道路空间规划条件。2 东海岛石化产业园区路网规划与设计实例2.1 项目地理位置拟建项目位于广东省国家级湛江经济技术开发区东海岛片区，东海岛位于湛江市南部，与湛江市主城区隔海相望；现有东北大堤与湛江市霞山区相连（堤长约6.8km），该大堤为东海岛与大陆联系的唯一通道。东海岛与湛江市区陆距约30km（自东山镇区至市中心区），海距约14km，是我国大西南金三角经济区的进出口咽喉。为配合中科炼化项目的建设，保证上下游产业同时建设，共同发挥效益，东海岛石化产业园区的基础设施建设显得非常重要（见图1）。2.2 建设规模及建设内容东海岛石化产业园区道路网共包含主干路7 条（东成城乡规划●设计 53大道、石化大道、调文路、调山路、东山大道、港前路和港南大道）、次干路12 条（北溪路、渔东路、联和一路、联和二路、东调路、山龙路、橹崛路、保税路、工业一路、工业三路、广源路和开源路）、支路3 条（工业二路、工业四路和管理中心环路），共22 条道路，全长约64km。建设内容主要包括道路、桥梁、交通、照明、绿化及市政管线工程（含给水管线、雨水管线、污水管线和中水管线，以及电信、电力及通信等市政管线）。图1　项目地理位置图3 总体规划与设计原则（1）以《广东省湛江市东海岛石化产业园区控制性详细规划》为依据，进行路网规划与设计研究。（2）从建设现代化、生态型园区的功能需求出发，建立功能完善、层次分明、内外联系便捷、高效的新型城区交通。（3）充分考虑近远期结合的建设步骤，根据实际情况和规划发展要求，合理有效地利用建设资金，以达到最大的建设成效。（4）综合考虑防洪、排涝以及道路周边的地块开发情况，以确定路线路面标高。（5）结合建设区域附近已建或在建工程项目的地质情况，结合本项目的地形、地理位置、项目建设要求、工程造价等综合因素，选择切实可行、造价合理的路基处理方式。（6）根据路网布局及地块使用情况，选择合适的交通组织方案，处理各交叉口的交通组织关系，尤其是起止点处的处理，使得功能与景观合理协调。（7）建设“以人为本”的道路系统，处理好机动车、非机动车和行人的关系，适应环境建设的需求，重视道路景观设计，使道路布局、绿化与沿线建筑和谐、美观。（8）结构设计应体现新颖、轻巧、安全、美观、经济且便于施工的特点。4 平面布局4.1 布局原则（1）根据路线在路网中的位置、功能，综合考虑路线经过地区的社会和经济发展，城市新区的现状与规划，确定工程起讫点、主要控制点，以及与之相互平行、交叉等项目的衔接。（2）在查明道路沿线的自然环境、地形、地质的基础上，采取工程防护与生态防护相结合等技术措施，减少对生态的影响程度，加强恢复力度，最大限度地保护环境。（3）道路平面线位按规划线位定线，处理好直线与平曲线的衔接，合理设置缓和曲线、超高、加宽等，根据道路等级合理设置交叉口、沿线建筑物出入口等。（4）应满足近期的使用要求，兼顾远期发展，减少废弃工程。4.2 平面布局石化产业园区内共涉及道路22 条，道路线位均根据《湛江市东海岛石化产业园区控制性详细规划》进行定线。交叉口组织与设计：（1）主干路与主干路相交、次干路与主干路相交，采用拓宽式信号灯控制；支路及非定位路与主干路相交，采用右进右出的方式处理。（2）次干路与次干路相交，采用普通信号灯方式控制；支路及非定位路与次干路相交，采用右进右出的方式处理；在部分支路与次干路相交的交叉口，采用信号灯的方式处理（见图2）。图2　路网平面布置图5 竖向高程设计道路纵断面设计根据《东海岛石化产业园区控制性详细规划》中的道路竖向设计规划进行控制，通常路段纵坡较为平缓，在跨越河流、铁路、相交道路时考虑其净空要求；纵断面设计参照区域规划控制标高，并适应道路周边地块开发的规划高程，合理确定路面设计标高。6 横断面分析横断面设计应在规划的红线范围内进行，断面布局应在充分理解《东海岛石化产业园区控制性详细规划意图》54的情况下，结合道路等级要求并符合道路两侧土地开发性质，同时考虑地方交通流情况。本项目共涉及22 条道路，根据各道路等级的不同，其采用的红线宽度也不同。城市主干路采用60m 和40m 的道路红线，城市次干路采用30m 的道路红线，城市支路采用20m 的道路红线。6.1 60m 道路红线横断面设计东成大道规划为城市主干路，道路红线宽度为60m。道路断面采用四幅路形式布置，四上四下8 车道，其具体的布置形式如下：5m 人行道+5m 非机动车道+2m 侧分带+15.75m 机动车道+4.5m 中央分隔带+15.75m 机动车道+2m 侧分带+5m 非机动车道+5m 人行道。6.2 40m 道路红线横断面设计中石化大道、调文路、港前路、调山路、东山大道和港南大道规划为城市主干路，道路红线宽为40m。道路断面采用二幅路形式布置，三上三下6 车道。规划横断面布置形式为：2m 绿化带+5m 行人与非机动车混行车道+12m机动车道+2m 中央分隔带+12m 机动车道+5m 行人与非机动车混行车道+2m 绿化带。6.3 30m 道路红线横断面设计北溪路、渔东路、联和一路、联和二路、东调路、山龙路、橹崛路（疏港大道至石源大道段）、保税路、工业一路、工业三路、广源路和开源路（石化大道至通港大道段）规划为城市次干路，道路红线宽为30m。道路断面采用一幅路形式布置，两上两下4 车道。规划横断面布置形式为：2m 绿化带+5.5m 行人与非机动车混行车道+15m 机动车道+5.5m 行人与非机动车混行车道+2m 绿化带。6.4 20m 道路红线横断面设计本项目中，橹崛路（石源大道至管理中心环路段）、开源路（通港大道至橹崛路段）、工业二路、工业四路和管理中心环路规划为城市支路，道路红线宽为20m。道路断面采用一幅路形式布置，一上一下2 车道。规划横断面布置形式为：2.5m 人行道+15m 机动车与非机动车混行车道+2.5m 人行道。7 结语（1）本项目建设服从园区控制性详细规划、服务园区企业的特点。石化园区内路网的建设要考虑园区交通流的方向性、重载的特点，道路交叉口的设计、道路纵坡的选择、路面结构类型的选择既要满足交通要求，又要体现环保和以人为本的理念。（2）园区路网的建设要考虑道路交通、市政管线的区域性和系统性特点。园区路网建设既要考虑道路防洪水位的高程，又要考虑道路填土高度、地块开发填土需求量过大而带来的土方不足、投资加大的问题；要考虑雨污水管网的埋深、出水口标高高于潮水位的要求，还要注意区域地质差、开挖支护费用高的特点。（3）沿海地区路基处理具有数量多、投资大的特点。建设区域北部位于吹填位置，南部区域范围内土地现状多样，涉及田地、林地、池塘、虾池、滩涂等。特殊路基处理是本项目开展的一个重点及难点。在设计过程中，项目组提出了多种特殊路基处理措施，特殊路基处理措施的优缺点，根据现场情况分区域确定特殊路基处理的方式方法。（4）道路建设与地块开发紧密衔接的特点。道路建设时既要考虑道路路基的稳定性，又要考虑道路两侧地块开发的需要。路基防护在满足路基安全要求的前提下，超宽0.5m 作为保护性路基，避免了路基的冲刷损害和过度防护，节约了投资。（5）市政设施的建设根据园区道路特点设计。雨污水等市政管线在管材的选用上考虑了地下水的腐蚀性、地质情况，同时考虑到园区空气、地表水污染的可能性，采用防腐管材；公交站的设置考虑园区上下班高峰人流集中的特点，结合企业地块、住宿、办公区域位置进行设置；在道路人行道外侧均建设绿化带，一方面起到绿篱的隔离作用，另一方面起到隔离厂区污染扩散的作用。（6）道路建设时应结合地块开发有序推进的特点。本项目为石化园区的市政基础设施建设，在报告编制、实施计划研究过程中，除了要注意道路之间的相交节点的高程关系外，还充分考虑了地块开发的需要，先搭建主要框架以满足地块开发建设的交通条件，然后根据地块开发顺序合理安排道路建设的先后顺序，以满足石化产业园区的建设。石化园区路网及市政管网的建设不同于其他园区路网的特点，决定了路网的建设要更多地考虑石化产业的特点以及对道路、市政配套设施的需要，同时要体现投资节省、经济环保、以人为本的科学发展理念。这些都需要在项目建设的前期规划、设计阶段加以重视，并在实施过程中采取有针对性的措施。参考文献：[1] 曾娟.城市新区建设中的片区路网规划与设计——以南宁市五象新区新三中周边路网工程为例[J].广西城镇建设,2014(5).[2] 龚夏云.新形势下片区路网设计要点[J].城市道桥与防洪,2019(4).'
        },
        result: {
          keywords: [],
          keyPhrases: [],
          category: ''
        },
        message: ''
      }
    },
    methods: {
      classifierFun() {
        this.$axios.post("posts/classifier", this.document)
        .then(res => {
          console.log(res.data);
          if(res.data.code == 1) {
            this.message = res.data.message;
            
            this.result = res.data;
            alert(res.data.message);
          }
          else {
            console.log(res.data.message);
            this.message = res.data.message;
            alert(res.data.message);
            this.$router.push('/classifier');
          }
        })
        .catch(err => {
          console.log(err);
        })
      }
    },
    mounted() {
      var userData = JSON.parse(localStorage.getItem('userData'));
      if (userData) {
        this.isLogin = true;
        this.username = userData.username;
      }
      else {
        this.isLogin = false;
      }
    }

  }
</script>

<style scoped>
  @import '../../assets/css/login.css';

  .my-login-page .card-wrapper{
    width: 65rem;
  }
  .my-login-page .card-body {
    width: 50%;
  }
  .my-login-page .card-title {
    margin: 2rem 0 -1rem 1rem;
  }

  #top {
    flex: 1;
    height: 100%;
    display: -ms-flexbox;
    background-image: linear-gradient(125deg,#f15448,#e91e62ee,#9C27B0,#3F51B5,#2196F3);
    background-size: 400%;
    animation: bganimation 20s infinite;
    color: #fff;
    text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
    box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);

  } 
  @keyframes bganimation{
    0%{
      background-position: 0% 50%;
    }

    50%{
      background-position: 100% 50%;
    }

    100%{
      background-position: 0% 50%;
    }

  }

  /* Links */
  a,
  a:focus,
  a:hover {
    color: #fff;
    text-decoration: none;
  }

  /* Custom default button */
  .btn-secondary,
  .btn-secondary:hover,
  .btn-secondary:focus {
    color: #333;
    text-shadow: none; /* Prevent inheritance from `body` */
    background-color: #fff;
    border: .05rem solid #fff;
  }

  .cover-container {
    max-width: 70rem;
  }

  /*
  * Header
  */
  .masthead {
    margin-bottom: 2rem;
  }

  .masthead-brand {
    margin-bottom: 0;
  }

  .nav-masthead .nav-link {
    padding: .25rem .25rem;
    font-weight: 700;
    color: rgba(255, 255, 255, .5);
    background-color: transparent;
    border-bottom: .25rem solid transparent;
  }

  .nav-masthead .nav-link:hover,
  .nav-masthead .nav-link:focus {
    border-bottom-color: rgba(255, 255, 255, .25);
  }

  .nav-masthead .nav-link + .nav-link {
    margin-left: 1rem;
  }

  .nav-masthead .active {
    color: #fff;
    border-bottom-color: #fff;
  }

  @media (min-width: 48em) {
    .masthead-brand {
      float: left;
    }
    .nav-masthead {
      float: right;
    }
  }


  /*
  * Cover
  */
  .cover {
    padding: 0 1.5rem;
  }
  .cover h1 {
    letter-spacing: 0.5rem;
    margin-bottom: 1.5rem;
  }
  .cover .btn-lg {
    padding: .75rem 1.25rem;
    font-weight: 700;
  }


  /*
  * Footer
  */
  .mastfoot {
    color: rgba(255, 255, 255, 0.822);
  }

  /* 
  * css3 fade-in
  */
  @keyframes fade-in {  
    0% {opacity: 0;}
    40% {opacity: 0;}
    100% {opacity: 1;} 
    from {bottom: -5rem;}
    to {bottom: 0rem;}
  }  
 
  #main {
    position: relative; 
    animation: fade-in 1.5s;
  }
  #main label {
    font-weight: bold;
  }
</style>
