<style lang='scss' scoped>
.gauge {
    background-color:#050742FF;
    height:100%;
}
</style>

<template>
    <div class='gauge'>
        <div id="myChart" :style="{width: '500px', height: '500px',margin:'0 auto'}"></div>
    </div>
</template>

<script>
export default {
    name: 'gauge',
    data(){
        return {
            axislineColor:new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#0ADCB7FF'
                },
                {
                    offset: 0.62,
                    color: '#4F00DFFF'
                },
                {
                    offset: 1,
                    color: '#E40DBFFF'
                }
            ]),
            gaugeOption:null
        }
    },
    computed:{

    },
    components: {

    },
    created(){
        
    },
    mounted(){
        this.gaugeRander();
    },
    methods: {
        gaugeRander(){
            this.gaugeOption = {
                series: [{
                        name: '车辆总数',
                        type: 'gauge',
                        z: 3,
                        min: 0,
                        max: 100,
                        radius: '90%',
                        axisLine: { // 坐标轴线
                            lineStyle: { // 属性lineStyle控制线条样式
                                width: 21,
                                color: [
                                    [1, this.axislineColor]
                                ],
                            }
                        },
                        axisTick: {
                            show: true,
                            lineStyle:{
                            color:"#0C1450FF"
                            }
                        },
                        axisLabel: {
                            show: true,
                            distance: 10,
                            textStyle: {
                                color: ['#0ADCB7FF','#4F00DFFF','#E40DBFFF'],
                                fontSize: 16,
                                fontWeight: 500
                            }
                        },
                        splitLine: { // 分隔线
                            show: true,
                            lineStyle:{
                            color:["#0C1450FF"]
                            }
                        },
                        detail: {
                            show: true,
                            color:"#E40DBFFF"
                            
                        },
                        data: [50]
                    },
                    {
                        name: '',
                        type: 'gauge',
                        z: 2,
                        min: 0,
                        max: 100,
                        radius: '75%',
                        axisLine: { // 坐标轴线
                            show: false,
                            lineStyle: { // 属性lineStyle控制线条样式
                                width: 0,
                                color: [
                                    [1, this.axislineColor]
                                ],
                            }
                        },
                        title: {
                            show: false
                        },
                        detail: {
                            show: false
                        },
                        axisTick: {
                            show: true,
                            length: 6,
                            lineStyle: {
                                width: 3,
                                color: '#979797'
                            }
                        },
                        axisLabel: {
                            show: false
                        },
                        splitLine: { // 分隔线
                            show: false
                        }
                    }
                ]
            };
            this.$echarts.init(document.getElementById('myChart')).setOption(this.gaugeOption);
        }
    }
}

</script>