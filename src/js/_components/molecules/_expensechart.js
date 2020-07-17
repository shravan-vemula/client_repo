import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';


export default class ExpenseChart extends PureComponent {
    constructor(props) {
        super(props);
        
    }
  
  render() {
    return (
      <AreaChart
        width={830}
        height={260}
        data={this.props.data}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false}   />
        <XAxis dataKey="name"  />
        <YAxis axisLine={false} mirror="true" dy={-7}  padding={{ top: 33 }} tickFormatter={(label) => `₹ ${parseInt(label)/1000}k`} />
        <Tooltip />
        <Area type="linear" display={this.props.expDisp} dataKey="expense" stackId="2" stroke="#c5cbe1" fill="rgb(0,0,0,0.1)" strokeWidth={3}/>
        <Area type="linear" display={this.props.budDisp} dataKey="budget" stackId="1" stroke="#668EB3" fill="rgb(0,0,0,0)" strokeWidth={3} />

      </AreaChart>
    );
  }
}
