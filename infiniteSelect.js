Component({
  mixins: [],
  data: {
    open: false    //是否展开
  },
  props: {
    list: Object,
    label: 'label',
    value: 'value',
    childrenkey: 'children',
    onSelect: () => {
    },
    onChildSelect: () => {
    }
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    toggleOpen(){
      this.setData({
        open: !this.data.open
      })
    },
    select(){
      let item = this.props.list;
      this.props.onSelect({ 
        label: item[this.props.label],
        value: item[this.props.value] 
      }); 
    },
    childSelect(data){
      this.props.onSelect(data);
    }
  },
});
