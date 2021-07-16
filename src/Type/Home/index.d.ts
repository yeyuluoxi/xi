export interface HomeItem{
  count: string,  //唯一标识
  projectname: string, //项目名称
  projectblock: string, //标段
  submittime_manmade: string,  //交工时间(submittime)
  projectlength_manmade: string, //标段长度
  // projecttype: string,  //技术等级
  techgrade_manmade: string,   //技术等级
  privincecode_manmade: string, //省份
  pactprice: string,    //中标价格
  balanceprice: string,    //结算价格
  source: string,    //来源
  update: string,    //来源是否存在(update_backup)
  webupdatetime: string,    //更新时间
  RowKey: string,   //项目名称&行键
  tablename: string //表名
}