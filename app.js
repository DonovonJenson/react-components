var GroceryList = (props) => (
  <div> <ul> 
  {props.items.map(item =>
    <GroceryListItem item = {item}/>
  )}
  </ul></div>
);

class GroceryListItem extends React.Component{

	constructor(props){
	super(props);
  this.state = {
    done: false
   };
  }

  onListItemClick(){
    this.setState({
      done: !this.state.done
    });
  }

    render() {
      var style = {
        fontWeight: this.state.done ? 'bold' : 'normal'
      }
    	return(
    	<li style={style} onMouseLeave={this.onListItemClick.bind(this)} onMouseEnter={this.onListItemClick.bind(this)}>{this.props.item}</li>
    	)
    }
}

ReactDOM.render(<GroceryList items={['apple','carrot','pear']} />, document.getElementById("app"));
