import React from 'react';
import { items } from './data'; // 引用数据文件
import ItemComponent from './ItemComponent';

export default function Main() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-50">
      {/* 这是页面主体部分 */}
      <div>
        {/* 主体:标题部分 */}
        <div className="w-full mt-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-medium mb-4 text-zinc-900 text-center">
              Discover The Best AI Tools
            </h1>
            <h2 className="text-2xl text-base font-medium text-zinc-500 line-clamp-2 text-center">
              Discover the top AI tools of 2024 with the Woy.ai AI Directory!
            </h2>
          </div>

          {/* 主体:列表部分 */}
          <section className="py-16 md:py-24 overflow-x-clip bg-gray">
            <div className="max-w-screen-xl w-full mx-auto px-6 lg:px-16">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 md:mb-20">
                {/* 列表部分：单项样式 */}
                {items.map(item => (
                    <ItemComponent key={item.pic} item={item} />
                ))}
              </div>
            </div>
          </section>
        </div>


      </div>

    </main>
  );
}
