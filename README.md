
钉钉小程序无限极菜单组件


![image](https://suntree.oss-cn-shenzhen.aliyuncs.com/task/2020-08-15/202008151354371412606184656799214354.png?)

利用组件的递归调用来实现无限极分类的菜单。

图例中的图标为 colorUI 框架自带的图标，读者也可以换成自己的图标，修改组件源码中的这段代码即可
<pre>
 &lt;text class="cuIcon-{{open ? 'fold' : 'unfold'}}"&gt;&lt;/text&gt;
</pre>

列表数据格式为：

<pre>
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
</pre>

## 组件参数
<pre>
list: 菜单列表数据

label: 显示的菜单 key 值，默认 'label'

value: 菜单的id key 值，默认 'value'

childrenkey: 下级菜单的 key 值，默认 'children'

onSelect: 选中菜单后的回调函数，返回 { label: '', value: '' }
</pre>
