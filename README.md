# dd-mini-components
钉钉小程序无限极菜单组件


![image](https://raw.githubusercontent.com/ithinkyang/dd-mini-components/master/menu.png)

利用组件的递归调用来实现无限极分类的菜单。
图例中列表数据格式为：
{
  kindID: 1,
  kindName: '弘毅科技',
  kindList: [{
    kindID: 2,
    kindName: '开发部门',
    kindList: [],
    parentKindID: 1
  }],
  parentKindID: 0
}
