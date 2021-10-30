<!--
 * @Author: 郑钊宇
 * @Date: 2021-10-12 09:12:39
 * @LastEditTime: 2021-10-30 21:43:02
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
          title: '基于残差神经网络的人群密度估算研究',
          abstract: '人群计数模型的应用在实际场景下会受到雾气以及光照的影响，使得获得的图像不够清晰，导致得出的结果存在较大的误差。针对此问题，提出了一种基于残差神经网络与图像去噪的人群数量统计算法。该算法结合低光照增强技术与自动色阶算法去雾技术对前端接收的数据进行优化处理，通过人群密度估计模型得出结果。设计基于残差神经网络，可有效降低多层神经网络下的训练退化问题，在训练阶段采用批标准化防止模型的过拟合，在验证阶段使用各类数据集与网络结构进行对比验证，实现了人群计数功能并达到了所期望的准确度。',
          keyword: '计算机视觉  人群计数  低光照增强  自动色阶',
          text: '0引言 2014年，黄浦江观景平台附近由于人员过于聚集而发生的拥挤踩踏事件致使多人死亡[1]。类似于此的踩踏事件不胜枚举，通过对监控视频进行实时检测计数并给出人员密度预警信息对于公共场所、旅游景点或疫情状况下的人流控制显得尤为重要。当前的人群密度检测模型种类繁多，但在准确度方面仍有一定的提升空间。基于目标分割与SVM的人数统计方法适用于垂直摄像头下的实时人数统计，对采集数据的要求较高[2]；图像边缘检测人数统计方法[3]具有较快的速度但是适用于室内环境，对室外等复杂环境的普适性较低；基于像素统计的人群检测模型实时性与适应性都有较好的表现，但是分类正确率低于神经网络的人群密度模型[4]；基于无线接入点方式进行人群密度检测对于环境设备要求高且准确度受主观行为影响[5]；三帧差分法进行人群密度检测的方法存在目标信息提取不完整的问题[6]。因此需要既能够适应各种实际场景又具有较高分类正确率的模型来提升人群密度检测的准确度。本文提出的算法结合低光照增强技术与自动色阶算法去雾技术对待检测数据进行优化，运用卷积神经网络进行特征提取并实现人数统计，解决了部分传统人群密度分析中的人群计数算法于实际中的应用问题，及受待检测数据质量影响的问题，提高了检测结果的准确性。1人群密度估算模型构建1.1人群密度估算模型人群密度估计模型如图1所示，分为环境优化处理、预处理、特征提取与特征融合三部分。第一部分为环境优化处理，根据实际场景对获得的图像进行优化，本文提供的场景包括浓雾与低光照环境，可在有需求的时候启用以提高结果的准确度。第二部分为数据的预处理，通过高斯核函数对原图像及标签进行处理，得到训练用的热力图[7]与图片输入。第三部分进行特征提取与特征融合，该模块将通过导入的热力图对图片进行特征提取，本文以Resnet101模型为基础，通过增加卷积层以增强模型的拟合能力，模型整体结构如表1所示。表1 模型整体结构Resnet101inputConv2D 7*7 6BatchNorm2d 64MaxPool2d(3,2,1)Bottleneck1 Bottleneck2 Bottleneck3 backend convDUConv2d 1*9 64convLRConv2d 9*1 64Conv2d 1*1 1特征融合部分[8]则将模型输出层通过一个卷积层将特征进行融合，最后将模型得到的结果再次转换为热力图的形式，通过像素点的个数得出当前区域人群的估计数量，通过热力图即可了解区域内的人群密度情况。1.2评价指标本文采用均方误差MSE（Mean Square Error,公式(2)）与平均绝对误差 MAE（Mean Absolute Error,公式(3)）作为衡量线性回归的评价指标。模型预测的点，距离测试数据集中的点平均距离越小，即MSE与MAE的值越小，说明模型越准确[9]。对于MBLLEN网络中的变量，常用的MSE和MAE损失函数无法表达图像丰富的特征故采用原文提出的新的损失函数为结构损失+内容损失+区域损失[11]。2估算模型关键技术2.1自动色阶优化图像雾化2.1.1自动色阶技术实际的检测情景中存在浓雾导致可视距离不足的极端情况，会导致识别结果过于低劣，因此需要改善待识别图像存在雾化现象的问题。采用自动色阶图像处理算法解决上述问题，自动色阶是将每个通道中最亮的像素化为白，最暗的像素化为黑，之后按照一定的比例对各个像素值进行再次分配。自动色阶图像处理算法运用直方图均衡化实现图像增强，为达成增强现实对比度的目的，该算法使用累积函数调整灰度值。具体操作为将原图像对应的灰度直方图从比较集中的灰度区间通过一定的转换变成在全部灰度范围内的均匀分布，使一定灰度范围内的像素数量大致相同。2.1.2解决图像雾化实现过程解决图像雾化共分为5个步骤，分别为：（1）分别统计各个通道的直方图；（2）分别计算各通道按照给定的参数所确定的上下限值；（3）判断最暗值与最亮值是否相等，若相等则无需矫正；（4）根据得出的（最暗值/最亮值）构建一个映射表，映射表的规则是，对于小于最暗值的值，则映射为0，对于大于最亮值的值，则映射为255；（5）分别映射各个通道。该算法将各个通道上的像素数进行伯努利分布，能够将被雾气覆盖的像素重新归纳，因此在处理存在雾化问题图像时能够有效区分并修正被雾化影响的画面。2.2低照度增强2.2.1MBLLEN实现低照度增强针对能见度低或夜间光照条件差时导致无法进行人群识别的问题，提出了低光照条件下的增强优化算法。可通过光线的反射能力优化[10]实现低光照增强，但该方法运行时间长无法满足现场实时处理的要求。因此提出基于MBLLEN网络架构[11]实现图像数据的低光照增强方法。2.2.2MBLLEN网络架构（1）FEM特征提取模块特征提取模块包含10个3×3的卷积层和激活函数，每一层的步长为1且每一层的输出即为下一层的输入和增强模块EM的输入，无池化处理表面特征损失。（2）EM增强模块该模块包含有和特征提取模块相同的子网络且子网络结构相同，对每一个子网络进行增强处理，增强多个方面的图像特征。增强模块具有卷积和反卷积对称结构，每一个子网络同时进行且参数独立。（3）FM融合模块使用3通道1×1卷积核融合增强模块EM子网络输出的所有图像。对于应用于视频而不是图像的低光照处理，需要进行模型修正即用3D卷积代替2D卷积且输入改为多帧图像。2.3预处理人群分布情况复杂多变，尤其是当人群较为聚集时，人与人之间的遮挡使得头部的识别变得困难。因此在数据输入神经网络前，需对数据集进行预处理，以提升样本训练的精度。数据集预处理即将输入的图片数据转化为热力图，通过数据集所提供对于头部注释的稀疏矩阵，利用自适应高斯核[12]的方法生成热力图。每个头部在图中的位置可以表示成一个脉冲函数 ，当有N个头部位置标记时可以表示为：将公式(4)与高斯核 进行卷积可以得到密度图 ，对于图像中每个头部 ，我们将其与最近相邻的k个距离表示为 ，所以平均距离为 ，因此，与 相关的像素位置与地面上的大致与 成比例的半径的区域相对应，其中使高斯核函数 与 成正比，所以密度F的公式可以写成：  (5)其中根据实验得出当 时的效果最佳[12]。图像预处理为热力图如图2所不，左图为原始图像，经预处理后生成右图的热力图（对应的人群密度图），该人群密度图输入神经网络进行训练。 图2 图片预处理2.4残差神经网络本文对人群密度估计的模型基于残差神经网络[13]网络，其引入了跳跃连接，残差结构图3所示，这可以使残差块间信息无阻碍传输，提高了信息流通，在更深的网络结构中不容易出现梯度消失与退化问题，所以残差神经网络的层数能够达到100层以上且保持较为优秀的性能[13]。图3 残差结构3模型验证及分析3.1ShanghaiTech数据集实验采用ShanghaiTech数据集[13]，它包含A，B两部分，分别对应人群稀疏与密集的情况。每个数据集包含图片与对应的标注。该数据集总共包含1198个带有标签的图像，总共标记的人数为330165。其中本次实验所采用的B数据集一共包含716张人群分布较为稀疏的人群图像，其中包括400张训练图片与316张测试图片。3.2实验平台及方法本次实验基于个人笔记本电脑，操作系统为Windows 10 1909，64位操作系统，16GB内存，使用的编程语言为Python 3.7.9，选用Pytorch 1.7.0框架进行实验，使用TensorBoard 1.13.1进行数据分析。采用的运算显卡为NVIDIA GeForce GTX1070（8GB显存），进行训练和测试。3.3实验结果及分析3.3.1与经典方法对比针对Shanghai Tech数据集的part B部分，本文使用神经网络为ResNet101[13]，为验证该方法的有效性及可靠性，与经典神经网络AlexNet、MCNN[12]、VGG[14]进行了对比实验，MAE、MSE及验证损失等三大评价指标对比分别如图4、图5和图6所示。图4 平均绝对误差（MAE）图5 均方误差（MSE）在平均绝对误差与均方误差中，ResNet101模型的数值表现较为优秀，但是在前期仍然存在着误差难以迅速下降的缺陷。图6 验证损失（Val_loss）以上所有模型的验证损失持续下降，不存在过拟合的现象。通过图4至图6所示，可得ResNet101、AlexNet、MCNN、VGG四种方法的MAE和MSE指标对比如表2所示。表2 各类神经网络对比结果MethodMAEMSETimeMCNN38.159.63h22mAlexNet14.222.24h10mVGG9.013.73h25mResNet1018.614.512h31m由表2知，本次实验所采用的ResNet101在平均绝对误差（MAE）和均方误差（MSE）上两个数值的表现较于表现最差的MCNN提高了约75%，但是在训练时间上，由于ResNet101神经网络结构较为复杂，训练的时间更长，但再本次实验的模型在B部分数据集上测试时MAE可降至8.6，在Shanghai Tech数据集上有着较好的性能。3.3.2特殊检测环境优化增强效果针对较暗环境与大雾环境下的人群密度检测，通过MBLLEN模型与自动色阶算法进行优化，结果如表3所示。表 3优化前后对比结果（MAE）场景优化前优化后较暗环境19.912.4大雾环境9.45.8表中数据为优化前后得出的平均误差值，说明在较为极端的情况下，优化后都可以在一定程度内提高模型的准确率。图像经过自动色阶优化与低照度增强后的结果如图7和图8所示。  图7 自动色阶优化结果 图8 低光照增强结果3.3.3正常情况下人群计数结果通过ResNet101神经网络对原图进行检测，结果如图9所示，最终得到的数据结果为198人，与实际结果194人相似，检测误差为2%，实现了在高密度人群和多遮挡情况下的人群计数估算。图9 人群计数模型结果3.3.4特殊场景下人群计数结果（1）低光照增强图10 低光照增强的人群计数结果如图10中原图实际人数为55人，经过低光照增强的人群计数结果计数结果由原来的25人变为了44人。优化后的MAE值由原来的19.9降为了12.4，增加了计数结果的准确性。由低光照增强算法前后输出结果可说明低光照增强算法的可行性。（2）图像去雾化图11 去雾化的人群计数结果如图11中原图实际人数为25人，经过去雾处理后的人群计数结果由原来的4人变为10人。优化后的MAE值由原来的9.4将为5.8，大大提高了准确性，减少了误差。由去雾化算法前后输出结果可说明该算法的可行性。4结论本文提出了一种基于残差神经网络的人群密度模型，该方法以检测真实场景中的人群密度为目的，实现了浓雾与低光照两种特殊检测场景下的优化。结果表明，本文以ResNet101模型为基础进行的优化模型，在准确性的数值上取得更好的结果。在通过经过自动色阶优化与低照度增强后的结果相较于优化前也有了较大的提升。总体在Shanghai Tech数据集的part B部分比实验中其余最优秀的VGG模型降低了4%的误差。'
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
