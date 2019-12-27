<style scoped lang="scss">
  .about {
    width:100%;
    height:100%;
    background-color:#050742FF;
  }
</style>
<template>
  <div class="about">
    <h1>echarts 测试</h1>
    <div id="myChart" :style="{width: '500px', height: '500px',margin:'0 auto'}"></div>
  </div>
</template>
<script>
export default {
  name: 'about',
  start(){
    return {
      option:null
    }
  },
  components: {
    
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        this.option = {
          backgroundColor: '#2c343c',
      
          title: {
              text: 'Customized Pie',
              left: 'center',
              top: 20,
              textStyle: {
                  color: '#ccc'
              }
          },
      
          // tooltip : {
          //     trigger: 'item',
          //     formatter: "{a} <br/>{b} : {c} ({d}%)"
          // },
      
          visualMap: {
              show: false,
              min: 80,
              max: 600,
              inRange: {
                  colorLightness: [0, 1]
              }
          },
          series : [
              {
                  name:'访问来源',
                  type:'pie',
                  radius : '55%',
                  center: ['50%', '50%'],
                  data:[
                      {value:335, name:'直接访问'},
                      {value:210, name:'邮件营销'},
                      {value:174, name:'联盟广告'},
                      {value:235, name:'视频广告'},
                      {value:400, name:'搜索引擎'}
                  ].sort(function (a, b) { return a.value - b.value}),
                  roseType: 'angle',
                  label: {
                      normal: {
                          show:false
                      },
                      emphasis:{
                        show:true,
                        color:"#fff"
                      }
                  },
                  labelLine: {
                      normal: {
                          show: false
                      },
                      emphasis: {
                          show: true,
                          lineStyle:{
                            color:'#fff'
                          }
                      },
                      lineStyle: {
                        color:'#fff',
                      }
                  },
                  // labelLine: {
                  //     normal: {
                  //         lineStyle: {
                  //             color: 'rgba(255, 255, 255, 0.3)'
                  //         },
                  //         smooth: 0.2,
                  //         length: 10,
                  //         length2: 20
                  //     }
                  // },
                  itemStyle: {
                      normal: {
                          color: '#c23531',
                          shadowBlur: 200,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  }
              }
            ]
          };
        // 绘制图表
        myChart.setOption(this.option);
        /*轮播展示数据*/
        var currentIndex = -1;
        var dataLen = this.option.series[0].data.length;
        var intervalTimer = null;
        intervalTimer && clearInterval(intervalTimer);
        intervalTimer = setInterval(()=>{
          myChart.dispatchAction({
            type:'downplay',
            seriesIndex:0,
            dataIndex:currentIndex
          });
          currentIndex = (currentIndex + 1) % dataLen;
          myChart.dispatchAction({
            type:'highlight',
            seriesIndex:0,
            dataIndex:currentIndex
          });
          myChart.dispatchAction({
            type:'showTip',
            seriesIndex:0,
            dataIndex:currentIndex
          })
        },3000);
        myChart.on('mouseover',(params)=>{
          clearInterval&&clearInterval(intervalTimer);
          myChart.dispatchAction({
            type:'downplay',
            seriesIndex:0
          });
          currentIndex = (currentIndex + 1) % dataLen;
          myChart.dispatchAction({
            type:'highlight',
            seriesIndex:0,
            dataIndex:params.dataIndex
          });
          myChart.dispatchAction({
            type:'showTip',
            seriesIndex:0,
            dataIndex:params.dataIndex
          })
        })
        myChart.on('mouseout',()=>{
          intervalTimer && clearInterval(intervalTimer);
          intervalTimer = setInterval(()=>{
            myChart.dispatchAction({
              type:'downplay',
              seriesIndex:0
            });
            currentIndex = (currentIndex + 1) % dataLen;
            myChart.dispatchAction({
              type:'highlight',
              seriesIndex:0,
              dataIndex:currentIndex
            });
            myChart.dispatchAction({
              type:'showTip',
              seriesIndex:0,
              dataIndex:currentIndex
            })
          },3000);
        })
    }
  }
}
</script>
