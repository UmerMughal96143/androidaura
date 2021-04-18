import React from 'react'
import {Tab,Row,Col,Nav} from 'react-bootstrap'
import { ReactSVG } from 'react-svg'

function BlogTwo() {
    return (
        <div>
            <div className="blog">
                <div className="container-fluid">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">RN – Android Environment setup</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">RN – IOS Environment setup</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">RN – FlatList</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="forth">RN – Grid Layout</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">RN – Hello World</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="sexth">RN – Images</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="seven">RN – ScrollView</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="eight">RN – Splashscreen</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="ninth">RN – Stack Navigation</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="tenth">RN – State</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="eleven">RN – Button</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="twelve">RN – ListView</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Col>
                            <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                {/* <Sonnet /> */}
                                <div className="tab-content-inner">
                                    <h3 className="tab-seaction-heading">Install React Native for Android</h3>
                                    <p>Follow these steps to install react native for Android:</p>
                                </div>
                                <div className="tab-emergence">
                                    <h3 className="tab-seaction-subheading">Step 1</h3>
                                    <p>
                                        Open Terminal.app and add following
                                    </p>
                                    <p className="code-scroll">
                                    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)" 
                                    </p>
                                    <p>
                                    If above link doesn’t work get new link from Homebrew
                                    </p>
                                    <h3 className="tab-seaction-subheading">Step 2</h3>
                                    <p className="code-commend">
                                        brew <span>install</span> node 
                                    </p>
                                    <h3 className="tab-seaction-subheading">Step 3</h3>
                                    <p className="code-commend">
                                        brew <span>install</span> watchman  
                                    </p>
                                    <h3 className="tab-seaction-subheading">Step 4</h3>
                                    <p>
                                        Install JDK
                                    </p>
                                    <p className="code-commend">
                                        brew cask <span>install</span> watchman adoptopenjdk/openjdk/adoptopenjdk8 
                                    </p>
                                    <h3 className="tab-seaction-subheading">Step 5</h3>
                                    <p>
                                    <a href="">Download and Install Android Studio</a>
                                    </p>
                                    <h3 className="tab-seaction-subheading">Step 6</h3>
                                    <p>
                                    Install the Android SDK <br />
                                    Requirements – Android 9 (Pie) or higher <br />
                                    Requirements – Android SDK Platform 28 or higher
                                    </p>
                                    <h3 className="tab-seaction-subheading">Step 7</h3>
                                    <p>
                                    Setup ANDROID_HOME environment variable
                                    </p>
                                    <p>Open Terminal <b>vi .bash_profile</b> <br />
                                    Add below lines
                                    </p>
                                    <p className="code-commend">
                                    export ANDROID_HOME=$HOME/Library/Android/sdk <br />
                                    export PATH=$PATH:$ANDROID_HOME/emulator<br />
                                    export PATH=$PATH:$ANDROID_HOME/tools <br />
                                    export PATH=$PATH:$ANDROID_HOME/tools/bin <br />
                                    export PATH=$PATH:$ANDROID_HOME/platform-tools 
                                    </p>
                                    <p>
                                    To save type :wq and enter
                                    </p>
                                    <p class="blog-img"><img src="asstes/image/env-android-1.png" /></p>
                                    <h3 className="tab-seaction-subheading">Step 8</h3>
                                    <p className="code-commend">
                                     <span>cd</span>  Desktop/ <br />npx react-native init reactFirstApp 
                                    </p>
                                    <p>Run your AVD Emulator from Android Studio and close Android Studio. Keep emulator running</p>
                                    <h3 className="tab-seaction-subheading">Step 9</h3>
                                    <p>Go to folder created</p>
                                    <p className="code-commend">
                                     <span>cd</span> reactFirstApp 
                                    </p>
                                    <h3 className="tab-seaction-subheading">Step 10</h3>
                                    <p>Running React Native application</p>
                                    <p className="code-commend">
                                     npx react-<span className="blue-code">native</span> start  
                                    </p>
                                    <h3 className="tab-seaction-subheading">Step 11</h3>
                                    <p>Run Packager – Android simulator – use different terminal</p>
                                    <h3 className="tab-seaction-subheading">Step 12</h3>
                                    <p>Running React Native application</p>
                                    <p className="code-commend">
                                     npx react-<span className="blue-code">native</span> run-android   
                                    </p>
                                    <p>This will take few minutes to execute</p>
                                    <p class="blog-img"><img src="asstes/image/emulator-8.png" /></p>
                                </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                <div className="tab-content-inner">
                                    <h3 className="tab-seaction-heading">Install React Native for IOS</h3>
                                </div>
                                <div className="tab-emergence">
                                    <p>
                                    Follow these steps to install react native for IOS:
                                    </p>
                                    <h3 class="tab-seaction-subheading">Step 1</h3>
                                    <p>
                                    <a href="https://nodejs.org/en/download/">Download and Install Node.js</a>
                                    </p>
                                    <p className="blog-img">
                                    <img src="asstes/image/env-setup-rn-1-768x372.png" />
                                    </p>
                                    <h3 className="tab-seaction-subheading">Step 2</h3>
                                    <p>
                                    <span>
                                    IOS – <a href="https://apps.apple.com/us/app/xcode/id497799835?mt=12">Download and Install XCode</a>
                                    </span>
                                    </p>
                                    <p>
                                    <img src="asstes/image/env-ios-2-300x156.png" />
                                    </p>
                                    <p>
                                    If you already have Xcode installed in your system, make sure its version is 9.4 or higher.
                                    </p>
                                    <p>
                                        <b>IOS simulator</b>
                                    </p>
                                    <p>
                                    Open Xcode  Preferences Locations tab Install latest version of Xcode command line tools.
                                    </p>
                                    <p className="blog-img">
                                    <img src="asstes/image/env-ios-3-768x531.png" />
                                    </p>
                                    <h3 className="tab-seaction-subheading">Step 3</h3>
                                    <p>
                                    Install CocoaPods
                                    </p>
                                    <p class="code-commend"><span>sudo</span> gem <span>install</span> cocoapods</p>
                                    <h3 className="tab-seaction-subheading">Step 4</h3>
                                    <p>
                                    <img src="asstes/image/env-ios-1.png" />
                                    </p>
                                    <p>
                                    Open Terminal.app and add following
                                    </p>
                                    <p class="code-commend">
                                    <p>// Open Terminal.app and add following</p>
                                    <p class="code-scroll">/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)" </p>
                                    </p>
                                    <p>If above link doesn’t work get new link from <a href="https://brew.sh/">Homebrew</a></p>
                                    <h3 className="tab-seaction-subheading">Step 5</h3>
                                    <p class="code-commend">brew <span>install</span> watchman </p>
                                    <h3 className="tab-seaction-subheading">Step 6</h3>
                                    <p>
                                    Go to folder created
                                    </p>
                                    <p class="code-commend">cd <span>Desktop/</span> <br />
                                    react<span className="blue-code">-native</span> init reactFirstApp  </p>
                                    <h3 className="tab-seaction-subheading">Step 7</h3>
                                    <p>
                                        Creating First App
                                    </p>
                                    <p class="code-commend"><span>cd/</span>
                                    reactFirstApp   </p>
                                    <p>Running React Native application</p>
                                    <h3 className="tab-seaction-subheading">Step 8</h3>
                                    <p class="code-commend">
                                    npx react<span className="blue-code">-native</span> start</p>
                                    <h3 className="tab-seaction-subheading">Step 9</h3>
                                    <p>Run Packager – IOS simulator – use different terminal</p>
                                    <p class="code-commend">
                                    react<span className="blue-code">-native</span> run-ios</p>
                                    <p>
                                        <b>Output</b>
                                    </p>
                                    <p>
                                    <img src="asstes/image/env-ios-5.png" />
                                    </p>
                                </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <div className="tab-content-inner">
                                        <h3 className="tab-seaction-heading">React Native – FlastList</h3>
                                    </div>
                                    <div className="tab-emergence">
                                        {/* <img src="asstes/image/FlastList.png" />
                                        <img src={"asstes/image/FlastList.svg"}/> */}
                                        {/* <ReactSVG src="asstes/image/FlastList.svg" /> */}
                                        {/* <Jotaro /> */}
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="forth">
                                <div className="tab-content-inner">
                                    <h3 className="tab-seaction-heading">React Native – Grid Layout</h3>
                                </div>
                                <div className="tab-emergence">
                                </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                <div className="tab-content-inner">
                                    <h3 className="tab-seaction-heading">React Native – Hello World</h3>
                                </div>
                                <div className="tab-emergence">
                                    <h3 class="tab-seaction-subheading">Step 1</h3>
                                    <p class="code-commend">cd <span>Desktop/</span> <br />npx react-native init helloWorldApp </p>
                                    <p>Run your AVD Emulator from Android Studio and close Android Studio. Keep emulator running</p>
                                    <h3 class="tab-seaction-subheading">Step 2</h3>
                                    <p>Go to folder created</p>
                                    <p class="code-commend"><span>cd/</span> helloWorldApp </p>
                                    <h3 class="tab-seaction-subheading">Step 3</h3>
                                    <p>Running React Native application</p>
                                    <p class="code-commend">npx react<span className="blue-code">-native</span> start</p>
                                    <h3 class="tab-seaction-subheading">Step 4</h3>
                                    <p>Run Packager – Android simulator – use different terminal</p>
                                    <h3 class="tab-seaction-subheading">Step 5</h3>
                                    <p class="code-commend">npx react<span className="blue-code">-native</span> run-android</p>
                                    <p>This will take few minutes to execute</p>
                                    <p>Open editor {">>"} <b>Visual Studio Code.app</b></p>
                                    <p>In <b>App.js</b> add below code</p>
                                    <p class="code-commend">
                                                <code>
                                                    {`import React, {Component} from 'react'; `}
                                                    <br />
                                                    {`import {Platform, StyleSheet, Text, View} from 'react-native';`}
                                                    <br />
                                                    {`type con = {};`}
                                                    <br />
                                                    {`export default class App extends Component<con> { `}
                                                    <br />
                                                    {`  render() {  `}
                                                    <br />
                                                    {`  return (  `}
                                                    <br />
                                                    {`<View style={styles.container}> `}
                                                    <br />
                                                    {`<Text style={styles.setFontSize}>Hello World</Text>`}
                                                    <br />
                                                    {`</View> `}
                                                    <br />
                                                    {` );  `}
                                                    <br />
                                                    {` }`}
                                                    <br />
                                                    {`}`}
                                                    <br />
                                                    {`const styles = StyleSheet.create({`}
                                                    <br />
                                                    {`container: {`}
                                                    <br />
                                                    {`flex: 1,`}
                                                    <br />
                                                    {`justifyContent: 'center',`}
                                                    <br />
                                                    {` alignItems: 'center'`}
                                                    <br />
                                                    {`  },`}
                                                    <br />
                                                    {`setFontSize: {`}
                                                    <br />
                                                    {`fontSize: 40 // Define font size here in Pixels`}
                                                    <br />
                                                    {`}}); `}
                                                    <br />
                                                </code>
                                    </p>
                                    <p>
                                        <img src="asstes/image/RN-hello-world-1-169x300.png" />
                                    </p>
                                </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="sexth">
                                <div className="tab-content-inner">
                                    <h3 className="tab-seaction-heading">React Native – Images</h3>
                                </div>
                                <div className="tab-emergence">
                                    <p>
                                        Create a folder and add images in it. Here we have created folder named <b>images</b> and added image 
                                        called <b>pic1.jpg.</b>
                                    </p>
                                    <p>
                                    In 1st example we will see how to display images from local storage.
                                    </p>
                                    <div className="centered-images">
                                        <p className="blog-img">
                                            <img src="asstes/image/RN-images-1.png" style={{width:"auto"}} />
                                        </p>
                                    </div>
                                    <p>
                                    <b>Open App.js</b> and add below code
                                    </p>
                                    <p>CODE</p>
                                    <div className="centered-images">
                                        <p className="blog-img">
                                            <img src="asstes/image/RN-images-2-169x300.png" style={{width:"auto"}} />
                                        </p>
                                    </div>
                                    <h5 className="tab-seaction-heading subminheading">
                                    In second example we will see how to load image from external sources.</h5>
                                    <p>CODE</p>
                                    <div className="centered-images">
                                        <p className="blog-img">
                                            <img src="asstes/image/RN-images-3-169x300.png" style={{width:"auto"}} />
                                        </p>
                                    </div>
                                </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="seven">
                                    <div className="tab-content-inner">
                                        <h3 className="tab-seaction-heading">React Native – ScrollView</h3>
                                    </div>
                                    <div className="tab-emergence">
                                        <p>CODE</p>
                                        <p>
                                            <b>Output</b>
                                        </p>
                                        <div className="centered-images">
                                            <p className="blog-img">
                                                {/* <ReactSVG src="RN-scrollview-1.svg" /> */}
                                                <img src="asstes/image/RN-scrollview-1.png" style={{width:"auto"}} />
                                            </p>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="eight">
                                    <div className="tab-content-inner">
                                        <h3 className="tab-seaction-heading">React Native – Splash Screen</h3>
                                    </div>
                                    <div className="tab-emergence">
                                        <p>CODE</p>
                                        <p>CODE</p>
                                        <p>
                                            <b>Output</b>
                                        </p>
                                        <div className="centered-images">
                                            <p className="blog-img">
                                                <img src="asstes/image/RN-splash-2.png" style={{width:"auto"}} />
                                            </p>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="ninth">
                                    <div className="tab-content-inner">
                                        <h3 className="tab-seaction-heading">React Native – Stack Navigation</h3>
                                    </div>
                                    <div className="tab-emergence">
                                        <h3 class="tab-seaction-subheading">Step 1</h3>
                                        <p class="code-commend"><span>npm install</span> 
                                        @react-navigation/native 
                                        </p>
                                        <h3 class="tab-seaction-subheading">Step 2</h3>
                                        <p class="code-commend">
                                            <p class="code-scroll">
                                            <span>npm install</span> react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view 
                                            </p>
                                        </p>
                                        <p>
                                        If you’re on a Mac and are building for iOS, you need to install the pods to complete the connection (via Cocoapods).
                                        </p>
                                        <p class="code-commend">
                                        npx pod-install ios 
                                        </p>
                                        <p>
                                        Wrap the entire app in NavigationContainer in your entry file like App.js
                                        </p>
                                        <p>CODE</p>
                                        <p class="code-commend">
                                        <span>npm install</span> @react-navigation/stack 
                                        </p>
                                        <p>CODE</p>
                                        <p>
                                            <b>Output</b>
                                        </p>
                                        <div className="centered-images">
                                            <p className="blog-img">
                                                <img src="asstes/image/RN-nav-stack-1.png" style={{width:"auto"}} />
                                            </p>
                                        </div>
                                        <h5 class="tab-seaction-heading subminheading">In this example we will navigate between different .js files</h5>
                                        <p>These .js files are kept in /src folder</p>
                                        <div className="centered-images">
                                            <p className="blog-img">
                                                <img src="asstes/image/RN-nav-stack-2.png" style={{width:"auto"}} />
                                            </p>
                                        </div>
                                        <p>CODE</p>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="tenth">
                                <div className="tab-content-inner">
                                        <h3 className="tab-seaction-heading">React Native State</h3>
                                    </div>
                                    <div className="tab-emergence">
                                    <p>
                                    The data is managed by state and props inside React Components.
                                    </p>
                                    <p>
                                    Two types of data components
                                    </p>
                                    <ul>
                                        <li>props</li>
                                        <li>state</li>
                                    </ul>
                                    <p>
                                    While props are immutable and <b>state</b> are mutable. This means that props will never change anytime and state can be changed later. We use <b>setState</b> to update the state when we want.
                                    </p>
                                    <p>
                                    In this example we will see Text component with “Click me :)” text. Once user clicks on text the state will be changed using <b>onPress</b> method and new message will be displayed “The state has changed” .
                                    </p>
                                        <p>CODE</p>
                                        <p>
                                            <b>Output</b>
                                        </p>
                                        <div className="centered-images">
                                            <p className="blog-img">
                                                <img src="asstes/image/RN-state.png" style={{width:"auto"}} />
                                            </p>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="eleven">
                                <div className="tab-content-inner">
                                        <h3 className="tab-seaction-heading">React Native – Button</h3>
                                    </div>
                                    <div className="tab-emergence">
                                    <p>
                                    In this example will see how to use <b>button</b> component. Here we will use <b>onPress</b> props to display <b>Alert</b> with message “You clicked the button!“
                                    </p>
                                        <p>CODE</p>
                                        <div className="centered-images">
                                            <p className="blog-img">
                                                <img src="asstes/image/RN-button-1.png" style={{width:"auto"}} />
                                            </p>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="twelve">
                                    <div className="tab-content-inner">
                                        <h3 className="tab-seaction-heading">React Native – ListView</h3>
                                    </div>
                                    <div className="tab-emergence">
                                    <p>
                                    In this example we will create array of color. On click event we will display the object name.
                                    </p>
                                        <p>CODE</p>
                                        <p>Output</p>
                                        <div className="centered-images">
                                            <p className="blog-img">
                                                <img src="asstes/image/RN-listview-1-169x300.png" style={{width:"auto"}} />
                                            </p>
                                        </div>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </div>
        </div>
    )
}

export default BlogTwo
