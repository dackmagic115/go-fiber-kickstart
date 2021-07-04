import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Paginator from '../../components/Paginator'
import Wrapper from '../../components/Wrapper'
import { Role } from '../../models/role'
import { Product } from '../../models/product';
import { Order } from './../../models/order';
import { orderItem } from './../../models/order-item';

const hide = {
   maxHeight: 0,
   transition: '1000ms ease-in'
}

const show = {
   maxHeight: '150px',
   transition: '1000ms ease-out'
}

const Orders = () => {

   const [orders, setOrders] = useState([])
   const [page, setPage] = useState(1)
   const [lastPage, setLastPage] = useState(0)
   const [selected, setSelected] = useState(0)

   useEffect(() => {
      (
         async () => {
            const { data } = await axios.get('orders')

            setOrders(data.data)
            setLastPage(data.meta.lastPage)
         }
      )()
   }, [page])

   const del = async (id: number) => {
      if (window.confirm('Are you sure you wnat to delete this record?')) {
         await axios.delete(`products/${id}`)

         setOrders(orders.filter((u: Role) => u.id !== id))
      }
   }

   const select = (id: number) => {
      setSelected(selected !== id ? id : 0)
   }

   const handleExport = async () => {
      const {data} = await axios.post('export', {},{responseType: 'blob'})
      const url = window.URL.createObjectURL(data)
      const link = document.createElement('a')
      link.href = url
      link.download = 'orders.csv'
      link.click()
   }




   return (
      <Wrapper>
         <div className="pt-3 pb-2 mb-3 border-botton">
            <a href="#" className="btn btn-sm btn-outline-secondary" onClick={handleExport}>Export</Link>
         </div>
         <div className="table-responsive">
            <table className="table table-sm">
               <thead>
                  <tr>
                     <th scope="col">#</th>
                     <th scope="col">Name</th>
                     <th scope="col">Email</th>
                     <th scope="col">Total</th>
                     <th scope="col">Action</th>
                  </tr>
               </thead>
               <tbody>
                  {orders.map((order: Order) => {
                     return (
                        <>
                        <tr key={order.id}>
                           <td>{order.id}</td>
                           <td>{order.name}</td>
                           <td>{order.email}</td>
                           <td>{order.total}</td>
                           <td>
                              <div className="btn-group mr-2">
                                 <a href="#" className="btn btn-sm btn-outline-secondary"
                                    onClick={() => select(order.id)}
                                 >
                                    View
                                 </a>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td colSpan={5}>
                              <div className="overflow-hidden" style={+selected === order.id ? show : hide}>
                                 <table className="table table-sm">
                                    <thead>
                                       <tr>
                                       <th scope="col">#</th>
                                       <th scope="col">Product Title</th>
                                       <th scope="col">Quantity</th>
                                       <th scope="col">Price</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       {order.order_item.map((oi: orderItem) => {
                                          return (
                                             <tr>
                                                <td>{oi.id}</td>
                                                <td>{oi.product_title}</td>
                                                <td>{oi.quantity}</td>
                                                <td>{oi.price}</td>
                                             </tr>
                                          )
                                       })}
                                    </tbody>
                                 </table>
                              </div>
                           </td>
                        </tr>
                        </>
                     )
                  })}
               </tbody>
            </table>
         </div>
         <Paginator page={page} lastPage={lastPage} pageChanged={setPage} />
      </Wrapper>
   )
}

export default Orders

