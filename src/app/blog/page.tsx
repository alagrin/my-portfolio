export default function Blog() {
    return <div className="flex flex-col items-center">
        <div className="banner bg-transparent px-4 mt-5 rounded shadow max-w-2xl mx-auto justify-center mb-10">
            <div className="banner-intro">
                <h1 className="banner-title">Articles and resources on the journey of learning product management</h1>
                <a href="#" className="btn btn-primary-light">Get new posts via Email &rarr;</a>
            </div>
        </div>
        <h1 className="text-2xl font-bold text-center">Blog</h1>
        <div className="container mx-auto p-4">
            <div className="layout-container">
                <div className="articles mx-auto">
                    <div className="article rounded shadow align-middle p-4 mb-4 bg-gray-50">
                        <div className="article-date text-center text-gray-500">
                            <p>21 August 2024</p>
                        </div>
                        <h1 className="article-title text-center">
                            <span className="icon"></span>
                            <p>Quick Review: Service Model by Adrian Tchaikovsky</p>
                        </h1>
                        <div className="article-content mt-4 text-left">
                            <p>
                                I recently finished the book Service Model
                                by Adrian Tchaikovsky, and thoroughly enjoyed it. There &#8217;s a little bit of a lull around the 60%&#8211;80% mark, but overall it &#8217;s a solid 4.5 stars for me. Mostly because the main character is a robot who isn &#8217;t sure if he has become self-aware or just imagining things, and he <em>certainly</em>
                                isn &#8217;t sure if he even wants that. It is a wonderful premise (albeit clearly inspired by the
                                ), and Uncharles is probably my favorite robot character in a novel in a long time. The dude is just incredibly relatable—here are some things he says or thinks in the book:
                            </p>
                            <blockquote>
                                <p>I wish to report an error in the way that everything works.</p>
                                <p>The world, as I have witnessed it, is a place lacking in efficiency, rationality, and cleanliness. I am driven to find a place in it nonetheless.</p>
                                <p>He sat down because, having decided that there was absolutely no reason to do anything ever again, he would cause less damage to himself and his surroundings when he eventually toppled over from a seated position, rather than from standing.</p>
                                <p>I do not feel I have greatly profited from seeing the world.</p>
                                <p>I suggest that &#8216;kind and ordered &#8217;is a better goal. It is possible that the world was once both kind and ordered. It is possible that it may be so again. Perhaps you will make it so.</p>
                            </blockquote>
                            <p>I, for one, would like to sign up for helping to make this a &#8220;kind and ordered &#8221;world.</p>
                            <p>Anyway, it &#8217;s a wonderfully funny and delightfully poignant sci-fi story that is about robots but actually really about humans. What &#8217;s not to like.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
