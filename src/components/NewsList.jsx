import React from "react";
import { news } from "../data";
import NewsCard from "./NewsCard";

export default function NewsList({newsItem}) {
    return (


        <div>
            {news.map(item => (
                <NewsCard key={item.id} newsItem={item} />
            ))}
        </div>
    )
}

