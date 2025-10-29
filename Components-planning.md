# Pages

1. Home
2. Subscriptions
   1. Channel Details
3. My Channel
4. Playlists
5. Play Video

# Components

<Home>
    <Sidebar>
        <PageLinks />
        <SubscribedChannels />
    </Sidebar>
    <Main>
        <NavBar>
            <Searchbar/>
            <ContinueWithGoogle/>
        </NavBar>
        <ChannelWiseRecentVideos/>
    </Main>
</Home>

<Subscriptions>
    <Sidebar>
        <PageLinks />
        <SubscribedChannels />
    </Sidebar>
    <Main>
        <Searchbar/>
        <ChannelCards/>
    </Main>
</Subscriptions>

<MyChannel>
    <Sidebar>
        <PageLinks />
        <SubscribedChannels />
    </Sidebar>
    <Main>
        <Searchbar/>
        <ChannelDetails/>
    </Main>
</MyChannel>

<Playlists>
    <Sidebar>
        <PageLinks />
        <SubscribedChannels />
    </Sidebar>
    <Main>
        <Searchbar/>
        <UserChannelPlaylists/>
    </Main>
</Playlists>

<PlayVideo>
    <Sidebar>
        <PageLinks />
        <SubscribedChannels />
    </Sidebar>
    <Main>
        <Searchbar/>
        <Video />
        <NextVideos />
    </Main>
</PlayVideo>
