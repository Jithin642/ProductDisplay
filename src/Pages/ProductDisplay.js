import React from 'react'
import './ProductDisplay.css'
import BarGraph from '../Components/BarGraph'

const ProductDisplay = () => {

    const data = ['60k','50k','40k','30k']

    const months = ['Jul', 'Aug', 'Mar', 'Apr', 'May']

  return (
    <div className='product-display'>
        <div className='pdrow-1'>
            <div className='semi-circle'>
                <div className='sub-heading'>Total Sales</div>
                <div className='semi-circle-subheading'>This year total data</div>
                <div className='donut-graph' />
                <div className='semi-circle-bottom'>Sales volume increased <br />intensely!</div>
            </div>
            <div className='horizontal-bar'>
                <div className='sub-heading'>Best Selling Products</div>

                <section>
                    <div className='horizontal-bar-heading'>Omega luxury watch</div>
                    <div className='horizonatl-bar-subheading'>Best for fashionable casual</div>
                    <div className='bar-graph' Style="--percentage: 49.6%;" />

                    <div className='horizontal-bar-heading'>Omega fashioned watch</div>
                    <div className='horizonatl-bar-subheading'>Best for fashionable casual</div>
                    <div className='bar-graph' Style="--percentage: 80%;" />
                    
                    <div className='horizontal-bar-heading'>Omega classic watch</div>
                    <div className='horizonatl-bar-subheading'>Best for fashionable casual</div>
                    <div className='bar-graph' Style="--percentage: 85%;" />
    
                </section>
            </div>
            <div className='vertical-bar'>
                <div className='sub-heading'> Website Visitors</div>
                <div className='semi-circle-subheading'>Chart is showing every month's numbers</div>

                <div className='chart'>
                    <div className='chart-row-1'>
                        <div className='values'> 
                            {data.map((val)=>{
                                return (
                                    <div className='nums'>{val}</div>
                                )
                            })}
                        </div>
                        <div className='vert-bar-graph'>

                            <div className='rectangle' Style="--val: 25%"></div>
                            <div className='rectangle' Style="--val: 30%"></div>
                            <div className='rectangle' Style="--val: 40%"></div>
                            <div className='rectangle' Style="--val: 50%"></div>
                            <div className='last-rectangle' Style="--val: 50%"></div>
                        </div>
                    </div>
                    <div className='chart-row-2'>
                        {months.map((val) => {
                            return (
                                <div className='months'>{val}</div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
        <div className='pdrow-2'>
            <div className='table'>
                table
            </div>
            <div className='line-graph'>
                line-graph
            </div>
        </div>
    </div>
  )
}

export default ProductDisplay