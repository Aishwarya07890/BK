website :https://bk-1rzn-aishwarya07890s-projects.vercel.app/
![image](https://github.com/user-attachments/assets/4c6cff3e-dfa4-48d1-ae34-6409678fbb99)
![image](https://github.com/user-attachments/assets/385f2ec3-4aea-40a9-88c9-0208965e161f)
![image](https://github.com/user-attachments/assets/ccaf47de-90da-4bc4-a2da-d570256d9a35)
![image](https://github.com/user-attachments/assets/fce56b25-550a-47a2-aab0-d10ffa53ef83)
Websites need to be fast otherwise this happens 1 second of load lag time would
cost Amazon $1.6 billion in sales per year a functional website is not enough
performance and web vitals matter FID LCP CLS
Performance
wait back in 2006 very few people cared about performance but the biggest
e-commerce website in the world realized that every 100 milliseconds of latency
cost them 1% of their sales how much is that 1% in 2006 it was 107 million the
company was Amazon and 1 pent of a second cost that much now that same 100
milliseconds costs billions and Walmart found the same thing 100 milliseconds
less low time meant 1% more Revenue as did Staples and Netflix too they made
their homepage where users sign up for an account or sign in much faster and
they doubled their profit that year but why does that matter to you why should you care if a big company makes or l
uses millions or even billions of dollars if you can build fast websites
or improve lad times which are proven to increase Revenue you can make a big case
for not only keeping your development job but also getting a promotion or a bonus if you do freelance work building
high performance websites makes you unique which means you stand out from the sea of other average developers
which means more and higher quality clients for your apps or startups it means your users are happier and are
more likely to use your apps C performance separates the average developer from a great one it's not
about finding a solution but about finding a great solution vercel vice
president Lee Robinson says especially with the rise of AI there's a growing
need for developers who do more than just write code developers who
understand the bigger picture who can work across various Technologies and who focus on delivering exceptional products
to the end
which has these impressive web
performance statistics 221 milliseconds of initial page load to less than 1
second to final page load we have one of the best numbers out there you'll be
learning these methods and strategies through the actual creation of the platform
it's like the speed and efficiency of a car on the road highlighting the smoothly part is essential because web
performance isn't just about speed it's also about creating a website that's
easy to navigate and use like a well structured Road imagine trying to drive
a Sleek Ferrari on this kind of a road but then how do we know if we have
achieved the best performance for a site this is where web vitals which Google
introduced in 20120 coming to play the term web vitals is a set of specific
metrics and guidelines developed by Google to measure and improve the user experience on websites we as developers
need these metrics to ensure that websites are fast responsive and provide
a smooth user experience which is crucial for us satisfaction and search
engine rankings yes depending on these metrics the website that performs the
best will be displayed first in search results so what are the core parts of
web vitals you may have come across terms like FCP LCP or CLS the core web
vitals three aspects of user experience loading interactivity and visual
stability let's understand them one by one largest contentful paint or LCP
measures the loading performance of the website it's calculated by measuring the time it'll take to render the largest
image or text block visible within the page relative to when the page first
started loading so what is a good LCP score for good user experience websites
should aim for a largest contentful paint time of 2.5 seconds or less and if
I take you back to the course platform website as you can see the score is great looks pretty good to me next up
our first contentful paint and first input delay we all know how important it
is to make a good first impression and first impressions are crucial almost
everywhere when meeting new people appearing for a job interview and even when building websites if your site is
attractive with great UI and ux and is smooth your interviewees will be
interested in knowing more about you won't they on the other other hand for product companies a good first
impression of their website can make the difference between someone becoming a loyal user or leaving them and never
coming back the question now is what makes a good first impression and how do
you measure what kind of impression you're likely making on your users the FCP or first contentful paint measures
the time it takes for the first piece of content to become visible in a user's web browser this content can be text
imag or any other element that's part of pages content whereas the FID or the
first input delay is how responsive or interactive the site is when the user
tries to interact with those pixels FID measures the time it takes for a web
page to respond to the first user interaction such as clicking a button or
a link so what are good FCP and FID scores for a good user experience
websites should aim for a first contentful paint of 1.8 seconds or less
and a first input delay of 100 milliseconds or less yes you read that
right the FID has to be less than 100 milliseconds the content shouldn't block
users otherwise they might feel the website isn't working and the final
performance metric is cumulative layout shift or CLS have you ever been on a
website like a News website and while you're reading suddenly something on the page changes
or worse you were just about to click a link and right before you touch it bam the link moves and you accidentally
click on something else like an ad or an annoying popup the sudden page changes
occur when elements load or shift behind the scenes it might be due to images or
videos of unknown sizes fonts behaving unexpectedly or third party ads and
widgets resizing so yes that's basically what CLS is it measures how much the
content on a web page unexpectedly jumps or shifts around while you're using it so what is a good CLS score well for a
good user experience a website should aim for a cumulative layout shift time of 0.1 or less have you visited the BBC
News website if you check the performance of their site even though they have great flp their CLS is awful
the
best okay now we've learned what the metrics are but how do you measure these
metrics well we have Chrome's Lighthouse to generate the performance report there
is also a special tool that is specifically used to measure the performance of a website called GT
metrics it will not only provide you with web scores and rate your website
but will also provide you with more detailed analysis like structure it tells you about how a web page is put
together and if there are any issues that might slow it down it's like an x-ray of a website you can visit this
section and see what you did best or what you need to improve on your website it's like peing under the hood of a car
to see how it's put together and making sure it runs smoothly everything clear so far now let's talk more about how we
can actually achieve these results from time to time we have been talking about using nextjs instead of react for
enhanced performance and a head of Google Chrome developer experience released a Netflix's web performance
case study there he said that there are no silver bullets to web performance
simple static Pages benefit from being server rendered with minimal JavaScript
libraries can provide great value for complex pages when used with care if you properly offload the page from the
client side and render some pages on the server side you'll have great performance and guess what that's
exactly what nextjs 13 does it allows you to pre-render some of your code on the server and send content such as HTML
CSS and minimal JavaScript files the client refers to the device you're currently using such as your smartphone
or computer the device sends requests to the server and displays the interface
that we can then interact with the server is essentially just a computer device but it is equipped with a strong
configuration and remains operational continuously it is where all the code for our
application is stored so when the client meaning our device sends a request the
server performs the necessary computations and sends back the required outcome client side means executing the
code on the user's browser this means that the server sends the HTML CSS and
JavaScript code to the client then the browser executes the JavaScript code and
the page is displayed server side means executing the code on the server before
it is sent to the user the server executes the JS code pre- renders the content and sends the pre-rendered HTML
file that doesn't mean it doesn't send JavaScript files at all it still sends some but a lot less than before this
leads to the page loading faster because the user's browser doesn't have to download a bunch of JavaScript code and
execute it to render the page but how do we render our content on the server side
this is where nextjs has the upper hand over react if Nintendo react introduced the feature of react server components
it's xgs 13 that has deeply integrated that feature by default any component
you create will be rendered on the server side now that we know how nextjs architecture Works let's see how these
things improve the performance in a nutshell first faster initial page load
with the above strategies we generate the HTML on the server and send it to the client with minimal JavaScript
therefore the page loads faster and closely related to that is reduced
client side load with react we're doing everything on the client's device thus a
higher JavaScript bundle size remember the Netflix case study where they say that they reduce the JavaScript bundle
by 200 kilobytes doesn't sound like a lot but they're proud of it so with
nextjs server side features we send pre-rendered HTML pages and minimal JavaScript code the argument against SSR
is that devices and the internet are getting faster every day and that is true but still there are hundreds of
millions of people in developing world and areas with slower devices and internet of course it depends on where
your users are if you have a website for a local sushi restaurant in New York you don't really need to take into account
International users it all depends on the context so what service side rendering because the server takes the
load of executing the JavaScript code users with slower intern internet and slower devices can start seeing content
more quickly which is never a bad thing next js's next benefit is image
optimization they offer their own image component which is highly optimized but
of course they're going to say it's good it's theirs so let's not take their word for it let's test whether they're right
or not I created two projects with sanity with the same code using NEX 13
and react 18 in the performance report of react 18 website network payloads was
a critical downfall as you can see images were served as they're coming from sanity whereas using nextjs 13's
image component that wasn't the case it actually optimized these images as you
can see all the images have been optimized and are less than 1 Megabyte in size all we had to do was replace the
lowercase IMG component with the NEX gs's image component and you have
amazing performance and and I think you can see which core web vitals will experience enhancement by using the next
gs's image optimization the LCP or the largest contentful paint the third
reason to use proper nextjs is SEO better SEO means that search engines
like Google can understand your website better and recommend it to more users
think about how often you look things up on a search engine SEO can make a big impact on businesses and it's one of the
reasons I recommend using next when working on projects for most clients client side rendering has worse SEO
because it sends minimal HTML content along with heavy JavaScript files search engine cers can't understand JavaScript
that well server rendering is different the server will send the complete HTML file and minimal JavaScript meaning that
the Crawlers read the bigger HTML file resulting in better SEO also faster initial load speed
matters Google values it as the time top ranking Factor when deciding whether to
display your website or not there is a reason why so many famous companies
including Netflix Tik Tok twitch Hulu notion Target and many more use xgs and
as we've been going through all of these benefits you can see that there are many many ways in which nextjs improves web
performance nextjs offers all of these features by default we just need to
understand them and decide when to apply them based on specific circumstances this is precisely what we will explore
next the how aspect all while building our incredibly fast Resource page now
there's something I want to ask you we spent a lot of time developing these interactive slides for the intros and
before those intros were like 5 minutes long but now we started expanding them to be 20 plus minutes long to convey
even more information please let me know if you appreciate those slides or if you would rather just prefer to move
straight to build and deploy video so just share your opinions of these slides or just type I prefer build and deploy
in the comments down below with that said let me teach you how to build our signature JSM Resource page to get
started with creating our SEO optimized fully performant NEX gs13 application it

