import React from 'react'
import ProductImages from './ProductImages';
import { productType } from '@/types';
import Link from 'next/link';
import Card from '@/components/global/Card';
import Price from '@/app/(pages)/(Home)/_components/Price';
import Rating from '@/app/(pages)/(Home)/_components/Rating';
import AddToCart from '@/app/(pages)/(Home)/_components/AddToCart';
import ProductDescriptionCard from './ProductDescriptionCard';

export default function ProductDetailsCard({product, isHome}: {product: productType, isHome?: boolean}) {
  return (
    <Card className="border mt-5">
      <div className="card-body p-4">
        <div className="flex flex-col lg:flex-row gap-5">
          <ProductImages images={product.attributes.banner.data} isHome={isHome}/>
          <div className="space-y-16 md:w-[calc(100%-31.25rem)]">
            <section className='space-y-4'>
              <div>
                <h2 className="text-lg font-bold">{product.attributes.title}</h2>
                <p>
                  <span>Brand: </span>
                  {product.attributes?.category?.data?.attributes?.name  ? <Link href={`/category/${product.attributes.category.data.attributes.slug}`} className="link link-primary">{product.attributes.category.data.attributes.name}</Link>: 
                  <Link href={`/category/all`} className="link link-primary">All</Link> }
                </p>
                <p>
                  <span className="text-base-content/50">32 In Stock</span>
                </p>
              </div>
              <div>
                <Price price={product.attributes.price} size='lg' discount={product.attributes.discount}/>
                <div className="space-x-2 flex items-center">
                  <Rating rate={product.attributes.rating} className="rating-sm"/>
                  <span className="text-success">Free shopping</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <AddToCart product={product} idItemInCart={undefined} productDetails/>
              </div>
              <p className="flex items-center space-x-2 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-base-content/40">
                  <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Safe and Secure Payments. Easy returns.</span>
              </p>
            </section>
            {!isHome && <ProductDescriptionCard description={product.attributes.description}/>}
          </div>
        </div>
      </div>
    </Card>
  )
}
