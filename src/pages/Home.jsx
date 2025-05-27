import {useEffect, useState} from 'react'
import service from '../appwrite/config'
import { Container, PostCard } from '../components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Home() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
       service.getPosts().then((posts) => {
        if(posts){
            setPosts(posts.documents)
        }
        setLoading(false)
       })
    }, [])

    if (loading) {
        return (
            <div className='min-h-screen flex items-center justify-center'>
                <div className="animate-pulse flex space-x-4">
                    <div className="rounded-full bg-primary-200 h-12 w-12"></div>
                    <div className="flex-1 space-y-2 py-1">
                        <div className="h-4 bg-primary-200 rounded w-3/4"></div>
                        <div className="h-4 bg-primary-200 rounded w-1/2"></div>
                    </div>
                </div>
            </div>
        )
    }

    if (!authStatus) {
        return (
            <div className='min-h-screen'>
                {/* Hero Section */}
                <section className="relative py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50"></div>
                    <div className="absolute top-10 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
                    <div className="absolute top-20 right-10 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '4s'}}></div>
                    
                    <Container>
                        <div className="relative z-10 text-center max-w-4xl mx-auto">
                            <h1 className="text-5xl md:text-7xl font-bold font-display gradient-text mb-6 leading-tight">
                                Welcome to BlogSphere
                            </h1>
                            <p className="text-xl md:text-2xl text-neutral-600 mb-8 leading-relaxed">
                                Discover amazing stories, share your thoughts, and connect with a community of passionate writers and readers.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Link 
                                    to="/login" 
                                    className="btn-primary px-8 py-4 text-lg font-semibold inline-flex items-center space-x-2"
                                >
                                    <span>Start Reading</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                                <Link 
                                    to="/signup" 
                                    className="btn-secondary px-8 py-4 text-lg font-semibold inline-flex items-center space-x-2"
                                >
                                    <span>Join Community</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Features Section */}
                <section className="py-20">
                    <Container>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold font-display text-neutral-800 mb-4">
                                Why Choose BlogSphere?
                            </h2>
                            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                                Everything you need to create, share, and discover amazing content
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="modern-card p-8 text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-neutral-800 mb-3">Rich Text Editor</h3>
                                <p className="text-neutral-600">Create beautiful posts with our advanced rich text editor featuring all the tools you need.</p>
                            </div>
                            
                            <div className="modern-card p-8 text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-neutral-800 mb-3">Community Driven</h3>
                                <p className="text-neutral-600">Connect with like-minded writers and readers in our vibrant community.</p>
                            </div>
                            
                            <div className="modern-card p-8 text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-neutral-800 mb-3">Lightning Fast</h3>
                                <p className="text-neutral-600">Built with modern technologies for the best performance and user experience.</p>
                            </div>
                        </div>
                    </Container>
                </section>
            </div>
        )
    }

    return (
        <div className='min-h-screen py-12'>
            <Container>
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold font-display gradient-text mb-4">
                        Latest Stories
                    </h1>
                    <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                        Discover the most recent posts from our community of writers
                    </p>
                </div>

                {/* Posts Grid */}
                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <div key={post.$id} className="h-full">
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-12 h-12 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-neutral-800 mb-4">No posts yet</h3>
                        <p className="text-neutral-600 mb-8">Be the first to share your story with the community!</p>
                        <Link 
                            to="/add-post" 
                            className="btn-primary px-6 py-3 inline-flex items-center space-x-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            <span>Create Your First Post</span>
                        </Link>
                    </div>
                )}
            </Container>
        </div>
    )
}

export default Home
