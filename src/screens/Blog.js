import React from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const Blog = () => {
  return (
    <div>
      <div className="blog">
        <div className="container-fluid">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">What is Android?</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Android Versions</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Android Architecture</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="forth">Android Components</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fifth">Environment Setup</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="sexth">Android Emulator</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="seven">Hello World Example</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="eight">Activity Lifecycle</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="ninth">Fragment Lifecycle</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tenth">TextView </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="eleven">Toast</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="twelve">Alert Dialog Box</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="thirteen">ToggleButton</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourteen">Spinner</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fifteen">SeekBar</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="sixteen">RatingBar</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="seventeen">RadioButton</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="eightteen">Progress Dialog</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="ninteen">Check Box</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="twenty">ListView</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="twentyone">ScrollView </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="twentytwo">Horizontal ScrollView </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="twentythree">WebView </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="twentyfour">Implicit Intent</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="twentyfifve">Explicit Intent</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="twentysix">Bundle</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="twentyseven">phone call</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="twentyeight">Sending Sms</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="twentynine">Sending Email</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="thirty">Change launcher Icon</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="thirtyone">Design – Login screen</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    {/* <Sonnet /> */}
                    <div className="tab-content-inner">
                      <h3 className="tab-seaction-heading">What is Android?</h3>
                      <div className="tab-Table-content">
                        <h6 className="tab-Table-content-heading">
                          Table of Content
                        </h6>
                        <ul>
                          <li>
                            <a href="">The emergence of Android</a>
                          </li>
                          <li>
                            <a href="">
                              {" "}
                              Key features that make android the best choice
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="tab-emergence">
                      <h3 className="tab-seaction-heading subminheading">
                        The emergence of Android
                      </h3>
                      <p>
                        With the digital revolution that has been taking place
                        since long; the emergence of android is considered one
                        of the greatest till now. Today, we’re going to
                        understand what Android is all about and what are its
                        versions.
                      </p>
                      <p>
                        Basically, Android is a software (mobile operating
                        system) maintained by Google developed for mobile
                        phones, tablets, and other devices. It is widely used in
                        a range of Smartphone’s like Samsung, LG, Motorola,
                        Xiaomi, Redmi, etc. Adding on, it was first launched in
                        the year 2003 and was actually acquired by Google in the
                        year 2005.
                      </p>
                      <p>
                        In the beginning of emergence of android , it just
                        seemed as an alternate to iOS, but with the years
                        passing on, Android has become successful in surpassing
                        iOS. Well, there are several reasons why people are more
                        into it; the price difference is the major reason of
                        all. However, there are several android versions as
                        Google every year releases a new version of android.
                        It’s quite interesting to see that every version is
                        named after a candy combined with the version number
                        like Android 1.5 Cupcake, 2.1 Eclair, and 4.0 Ice Cream
                        and so on.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        Key features that make Android the best choice
                      </h3>
                      <h3 className="tab-seaction-subheading">
                        Reasonable in price
                      </h3>
                      <p>
                        Android Smartphone’s are very price friendly in
                        comparison to iOS and that’s why people nowadays are
                        more into buying android phones rather than iOS phones.
                        Android phones provide multiple functionalities at
                        economical prices.
                      </p>
                      <h3 className="tab-seaction-subheading">
                        Customizable as per the needs
                      </h3>
                      <p>
                        The other best thing about android is the customizable
                        capability that gives it a distinctive edge over iOS
                        users. There are numerous Android devices available in
                        the market and the buyers have wide choices in selecting
                        the best as per his needs and desires.
                      </p>
                      <h3 className="tab-seaction-subheading">
                        Appearance makes a difference
                      </h3>
                      <p>
                        Nowadays, Android Smartphone’s are available in various
                        textures and designs that make these devices more
                        attractive and the people usually buy android devices
                        for their looks and appearance.
                      </p>
                      <h3 className="tab-seaction-subheading">
                        Unique mobile experience
                      </h3>
                      <p>
                        The mobile user experience that an android Smartphone’s
                        gives is quite different from that of iOS mobile phones.
                        The android mobile phones are quite easy to use and
                        therefore, the user attains a very smooth and unique
                        mobile experience.
                      </p>
                      <h3 className="tab-seaction-subheading">
                        Easy to understand user interface
                      </h3>
                      <p>
                        The next important feature that a user looks for before
                        buying a mobile, is easy to understand. An android
                        Smartphone usually integrates a friendly user interface
                        that makes it for the user to use and understand the
                        functionalities easily.
                      </p>
                      <h3 className="tab-seaction-subheading">
                        Regular software updates for better utility
                      </h3>
                      <p>
                        Android Smartphone’s release regular software updates
                        that are essential for improving the overall working of
                        the android device. Due to its software update feature,
                        the adoption of android is at the peak as people find it
                        more engaging and convenient as well.
                      </p>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div className="tab-content-inner">
                      <h3 className="tab-seaction-heading">
                        Android and it’s Versions
                      </h3>
                      <div className="tab-Table-content">
                        <h6 className="tab-Table-content-heading">
                          Table of Content
                        </h6>
                        <ul>
                          <li>Android 1.0</li>
                          <li>Android 1.1</li>
                          <li>Android 1.5Cupcake</li>
                          <li>Android 1.6 Donut</li>
                          <li>Android 1.6 Donut</li>
                          <li>Android 2.2 Froyo</li>
                          <li>Android 2.3 Gingerbread</li>
                          <li>Android 3.0 Honeycomb</li>
                          <li>Android 4.0 Ice Cream Sandwich</li>
                          <li>Android 4.1 Jelly Bean</li>
                          <li>Android 4.4 KitKat</li>
                          <li>Android 5.0 Lollipop</li>
                          <li>Android 6.0 Marshmallow</li>
                          <li>Android 7.0 Nougat</li>
                          <li>Android 8.0 Oreo</li>
                          <li>Android 9 Pie</li>
                          <li>Android 10</li>
                          <li>Android 11</li>
                        </ul>
                      </div>
                    </div>
                    <div className="tab-emergence">
                      <p>
                        Putting a glance towards the history of the android
                        version, there have been several Android versions that
                        had taken place till now. The very first android
                        commercial version (Android 1.0) was released on 23
                        September 2008 and thereafter, it has several updates
                        since its first version release.Below is the brief about
                        the version history of android:
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        Android 1.0
                      </h3>
                      <p>
                        This was the first commercial version release of android
                        software. However, the first android device commercially
                        available was the HTC Dream. The version introduced
                        several updates like Gmail synchronization with the
                        Gmail application. Google maps with street view became
                        possible by using GPS. The Google Talk instant messaging
                        feature was also introduced in this release. The YouTube
                        video player was also introduced in this version with
                        Wi-Fi and Bluetooth Support.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        Android 1.1
                      </h3>
                      <p>
                        This version was the second update release also known as
                        ‘Petit Four’, released on 9 February 2009. However, this
                        name was not officially used. In this version, all the
                        bugs were resolved and several new features were added
                        thereon. The details and reviews were made available now
                        whenever a person searches for business reviews on maps.
                        Apart from this, other new features were also
                        introduced.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        Android 1.5 Cupcake
                      </h3>
                      <p>
                        The Cupcake version of android was introduced on 27
                        April 2009 based on Linux kernel 2.6.27. This update
                        introduced several new features and user interface
                        amendments. New updates like video recording and
                        playback in MPEG-4 and 3GP formats, ability to upload
                        videos on YouTube, ability to check the usage history,
                        etc. were also introduced.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        Android 1.6 Donut
                      </h3>
                      <p>
                        This Donut version of android was released on 15
                        September 2009. Several new features like faster camera
                        access, updated technology support, and speed
                        improvements in search and camera apps took place in
                        this version update.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        Android 2.0 Eclair
                      </h3>
                      <p>
                        The Eclair version of the android update was released on
                        26 October 2009 based on Linux kernel 2.6.29 and was
                        named as Eclair. Numerous new features like expanded
                        account sync wherein users could add multiple accounts
                        to the same device to enable the email and contacts
                        synchronize, new camera features including flash
                        support, color effect, and macro focus, etc. were
                        introduced in this release.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        Android 2.2 Froyo
                      </h3>
                      <p>
                        This version was named on ‘Frozen yogurt’ and was
                        therefore released on 20 May 2010. It was based on Linux
                        kernel 2.6.32. Several new traits like speed
                        enhancement, memory, and performance of optimization,
                        improved application launcher with phone shortcuts,
                        option to disable the mobile network, etc. were
                        introduced in this release.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        Android 2.3 Gingerbread
                      </h3>
                      <p>
                        The gingerbread version was introduced on 6 December
                        2010 based on 2.6.35. This version introduced several
                        new features like updated user interface with enhanced
                        speed, more intuitive and faster text input for more
                        accuracy and better performance, new audio effects like
                        equalization and bass boost, etc., were all introduced
                        in this version release.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        Android 3.0 Honeycomb
                      </h3>
                      <p>
                        The Honeycomb version of android was released on 22
                        February 2011. This version was the first tablet-only
                        Android update based on Linux kernel 2.6.36. With the
                        arrival of this update, the complete keyboard was
                        redesigned making the typing experience faster,
                        efficient and more accurate with the ability to encrypt
                        the complete user data.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        Android 4.0 Ice Cream Sandwich
                      </h3>
                      <p>
                        The Ice Cream Sandwich version of android release was
                        launched on 19 October 2011. Numerous features like easy
                        folder creation with comfortable drag and drop, improved
                        error correction on keyboard and easy & quick copy-paste
                        functionality, face unlock feature, etc., were
                        introduced in this version. Also, minor bugs were fixed.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        Android 4.1 Jelly Bean
                      </h3>
                      <p>
                        The Jelly Bean version was introduced on 27 June 2012
                        based on 3.0.31. Well, the primary objective of this
                        release was to improve the performance of the user
                        interface. However, the first device to support Jelly
                        Bean was released on 13 July 2012. Several new features
                        like user-installable user maps, Bluetooth data
                        transferability, improved camera application, etc. were
                        introduced in this release.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        Android 4.4 KitKat
                      </h3>
                      <p>
                        This version of android update was released on 3
                        September 2013. However, initially, its name was kept
                        under ‘Key Lime Pie’ but was changed later on. The
                        interface was refreshed replacing all the blue elements
                        with white elements and a new framework was introduced
                        for UI transitions.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        Android 5.0 Lollipop
                      </h3>
                      <p>
                        The Lollipop version of android update was named
                        ‘Android L’ and released on 25 June 2014. With this
                        version, the lock screen shortcuts to application and
                        settings panel were introduced. Also, the guest logins
                        and multiple user accounts were facilitated, the
                        third-party apps were now able to read and modify the
                        data located on external storage. The addition of 15 new
                        languages and the smart lock feature with updated emoji
                        patterns were also introduced.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        Android 6.0 Marshmallow
                      </h3>
                      <p>
                        The Android 6.0 ‘Marshmallow’ was codenamed as Android M
                        and it was released on 28 May 2015. With this release,
                        the app standby feature was introduced with no screen
                        rotation on touch anymore. Also, several new important
                        commands were now supported.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        Android 7.0 Nougat
                      </h3>
                      <p>
                        This release is considered one of the major Android
                        releases till now. The Nougat version of android was
                        launched on 9 March 2016. However, its final release
                        took place on 22 August 2016. With this version release,
                        several new features were introduced like display color,
                        ability to view the screen by zooming in, switch the
                        last opened app, redesigned overview screen, sending
                        GIFs, introducing developer options, battery usage
                        alerts, etc.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        Android 8.0 Oreo
                      </h3>
                      <p>
                        The Oreo android version was the 8th major release with
                        the stable version release in August 2017 with the
                        arrival of new features like picture-in-picture support,
                        notifications improvements, the introduction of Google
                        Play Protect, color management, Automatic light, and
                        dark themes, auto fill framework updates, and Wi-Fi
                        Assistant, etc. were introduced.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        Android 9 Pie
                      </h3>
                      <p>
                        The pie version of android release was the 9th major
                        release of operating system introduced on first by
                        Google on 7 March 2018. However, the final official beta
                        of Android 9 Pie was released on 6 August 2018. With
                        this release, a new user interface was introduced for
                        the quick settings menu. Also, a new ‘lockdown’ mode was
                        activated and other features like transitions while
                        switching between applications were arrived with this
                        release.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        Android 10
                      </h3>
                      <p>
                        The 10th android version release was first launched on
                        31 March 2019 but its stable version was released on 3
                        September 2019. Several new features like the detailed
                        format for photos with the blur background, enhanced
                        support for Wi-Fi security protocol, and other advanced
                        supporting updated were introduced with this version
                        release.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        Android 11
                      </h3>
                      <p>
                        Android 11 is basically the 11th major android version
                        of the update introduced by Google. It was first
                        announced along with its beta release on 19 February.
                        However, with this version release, new permission
                        controls were introduced in the existing operating
                        system. It is the most recent android that has been
                        taken place till now.
                      </p>
                      <p>
                        Well, we’ve tried to cover and discuss all the android
                        version releases that have been occurred by today and
                        therefore, in this android tutorial, we have tried to
                        capture all the necessary details in this context.
                      </p>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <div className="tab-content-inner">
                      <h3 className="tab-seaction-heading">
                        Android Architecture
                      </h3>
                      <div className="tab-Table-content">
                        <h6 className="tab-Table-content-heading">
                          Table of Content
                        </h6>
                        <ul>
                          <li>
                            <a href="">The Android Operating System</a>
                          </li>
                          <li>
                            <a href="">Android Architecture</a>
                          </li>
                          <li>
                            <a href="">Linux Kernel</a>
                          </li>
                          <li>
                            <a href="">Libraries</a>
                          </li>
                          <li>
                            <a href="">Android Runtime</a>
                          </li>
                          <li>
                            <a href="">Application Framework</a>
                          </li>
                          <li>
                            <a href="">Applications</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="tab-emergence">
                      <p>
                        Android Architecture is one of the most crucial
                        foundations on which a project stands. Without it, a
                        project would not only become unappealing but
                        incompetent as well. A project with a good architectural
                        design is a well thought-out and well planned project.
                        Such a project is more efficient, detailed and
                        sophisticated than those projects that do not invest a
                        lot in pre-planning and architectural basing.
                      </p>
                      <p>
                        You must have seen the term “architecture” being
                        associated with buildings only. However, the truth is,
                        many kinds of projects require architectural basing
                        before they are manufactured. In this list, a prominent
                        object is Operating System. Operating systems require an
                        elaborate plan and architecture so that they can be
                        created properly without wasting any resources.
                      </p>
                      <p>
                        You must be thinking how architecture is applied in an
                        operating system development. The architecture of
                        operating systems refers to the overall design of
                        software and hardware components. During the process,
                        the overall operational effectiveness of the components
                        is never ignored. Besides that, an efficient operating
                        system must be cognizant of its processes and users, so
                        its programs and data have to be kept in mind as well.
                      </p>
                      <p>
                        Because architecture is so useful for making an
                        efficient operating system, many well-reputed operating
                        systems have made use of it. These operating systems
                        include Windows, Android, iOS and many more. That being
                        said, this article will be focusing only on the Android
                        Architecture.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        The Android Operating System
                      </h3>
                      <p>
                        Android is the name of one of the most famous and
                        leading operating systems of today. With the rising
                        popularity of smart phones in the last 15 or so years,
                        the need of an operating system that has a great
                        compatibility with these devices was immense. In this
                        time of need, the first commercially available Android
                        smart phone was released in the September of 2008.
                      </p>
                      <p>
                        The operating system is designed principally for mobile
                        devices, such as smart phones and tablets. Starting from
                        black-and-white phones to the latest smart phones, the
                        Android operating system has developed a lot since its
                        invention—making it one of the most widely used mobile
                        operating systems nowadays.
                      </p>
                      <p>
                        Having the ability of supporting millions of
                        applications in mobile devices, Android is among the
                        most powerful operating systems in the world. Not only
                        that, Android applications are known to be comfortable,
                        convenient and advanced for their users. On top of that,
                        Android is an open source operating system, which means
                        it is freely available for people to use.
                      </p>
                      <p>
                        None of this would be possible to achieve without the
                        exceptional Android Architecture that we are about to
                        study.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        Android Architecture
                      </h3>
                      <p>
                        The Android Architecture is made up of a number of
                        different components. These components are required to
                        support all the needs of Android devices. The Android
                        Architecture is designed in such a way that it has
                        layers, like that of a stack. This Android software
                        stack contains an open source Linux Kernel possessing a
                        collection of C/C++ libraries. These are exposed through
                        an application framework, runtime, services and
                        applications.
                      </p>
                      <p>
                        There are five components of the Android Architecture,
                        and these five components are arranged in four layers.
                        The names of the five software components are as
                        follows:
                      </p>
                      <ul>
                        <li>Linux Kernel</li>
                        <li>Libraries</li>
                        <li>Android Runtime</li>
                        <li>Application Framework</li>
                        <li>Applications</li>
                      </ul>
                      <h3 className="tab-seaction-heading subminheading">
                        1. Linux Kernel
                      </h3>
                      <p>
                        In Android Architecture, the four layers of software
                        components begin with Linux Kernel. That is to say,
                        Linux Kernel is at the bottom of the layers. To be more
                        precise, the Android Architecture uses the version 3.6
                        of the Linux Kernel, which has about 115 patches.
                      </p>
                      <p>
                        Being the base of this software stack, Linux Kernel is
                        the main component of the Android Architecture. For this
                        reason, Linux Kernel has the most important
                        responsibilities out of all the components. With the
                        abstraction layer provided by the Linux Kernel, the
                        device hardware gets linked with the rest of the
                        software stack.
                      </p>
                      <p>
                        Other than that, Linux Kernel manages all the essential
                        hardware drivers, such as camera drivers, Bluetooth
                        drivers, display drivers, USB drivers, audio drivers,
                        memory drivers, keypad drivers, etc. All the important
                        drivers are required by the Android device at runtime.
                        In addition to that, Linux Kernel has the responsibility
                        of managing the device along with its memory and power.
                        And, last but not least, the Linux Kernel is also really
                        good at handling networking.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        2. Libraries
                      </h3>
                      <p>
                        The second layer of the software stack is of a set of
                        Libraries, which means that they are on top of the Linux
                        Kernel. This set of Libraries, also known as The
                        Platform Libraries, consists of a variety of C/C++ core
                        libraries and java based libraries, such as SQLite
                        database (a useful repository for storage and sharing of
                        application data), SSL libraries, Webkit (an open source
                        web browser engine), Libc, Surface Manager, Graphics,
                        Media, OpenGL and many more.
                      </p>
                      <h3 className="tab-seaction-subheading">
                        Android Libraries
                      </h3>
                      <p>
                        The different Libraries mentioned above can be
                        categorized on the basis of their functions. Some of
                        those java based libraries are there to provide support
                        for Android development. For this particular purpose,
                        libraries like application framework libraries are used.
                        Apart from those, the libraries that facilitate UI (User
                        Interface) building, database access and graphics
                        drawing are also used.
                      </p>
                      <h3 className="tab-seaction-subheading">
                        Easy to understand user interface
                      </h3>
                      <p>
                        The next important feature that a user looks for before
                        buying a mobile, is easy to understand. An android
                        Smartphone usually integrates a friendly user interface
                        that makes it for the user to use and understand the
                        functionalities easily.
                      </p>
                      <p>
                        A few core Android libraries available to a developer in
                        Android development are summarized below:
                      </p>
                      <h3 className="tab-seaction-subheading">
                        android.database
                      </h3>
                      <p>
                        This package is used to access data that is published by
                        content providers, and it also includes SQLite database
                        management classes.
                      </p>
                      <h3 className="tab-seaction-subheading">android.os</h3>
                      <p>
                        This package is used to obtain applications with access
                        to standard operating system services, which includes
                        inter process communication, system services and
                        messages.
                      </p>
                      <h3 className="tab-seaction-subheading">android.app</h3>
                      <p>
                        This package is used to obtain access to the application
                        model, and it is the foundation of all Android
                        applications.
                      </p>
                      <h3 className="tab-seaction-subheading">
                        android.opengl
                      </h3>
                      <p>
                        This package is a java interface to the OpenGL ES
                        3D-graphics-rendering API.
                      </p>
                      <h3 className="tab-seaction-subheading">
                        android.widget
                      </h3>
                      <p>
                        This package is a collection pre-developed UI
                        components, which includes buttons, list views, radio
                        buttons, labels, layout managers, etc.
                      </p>
                      <h3 className="tab-seaction-subheading">android.text</h3>
                      <p>
                        This package is used to modify and render text on a
                        device display.
                      </p>
                      <h3 className="tab-seaction-subheading">
                        android.webkit
                      </h3>
                      <p>
                        This package is a set of classes which allow
                        web-browsing abilities to be developed into
                        applications.
                      </p>
                      <h3 className="tab-seaction-subheading">
                        android.content
                      </h3>
                      <p>
                        This package basically facilitates access to content,
                        messaging and publishing between applications and
                        components of applications.
                      </p>
                      <h3 className="tab-seaction-subheading">android.view</h3>
                      <p>
                        This package is the basic building block of UI of
                        applications.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        3. Android Runtime
                      </h3>
                      <p>
                        The third component of the Android Architecture is
                        located in the second layer of the software stack—the
                        same layer that has the Libraries. This third section,
                        known as Android Runtime, contains key components like a
                        set of core libraries and Dalvik Virtual Machine (VM).
                      </p>
                      <p>
                        The set of core libraries is used allow Android app
                        developers to write Android app codes by using the
                        standard Java programming language.
                      </p>
                      <p>
                        On the other hand, the Dalvik VM is a register based VM,
                        such as the Java Virtual Machine (JVM). The Dalvik VM is
                        specifically designed and optimized for Android so that
                        a device is able to run a number of instances
                        efficiently. This VM depends upon the Linux Kernel for
                        multi-threading and memory management.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        4. Application Framework
                      </h3>
                      <p>
                        The Application Framework, located in the third layer
                        i.e. above Libraries and Android Runtime, provides the
                        classes to develop Android apps. Also, the Application
                        Framework provides a generic abstraction for hardware
                        access. Additionally, it manages the UI and app
                        resources.
                      </p>
                      <p>
                        Basically, the Application Framework offers us a number
                        of high-level services to apps in the form of java
                        classes. In Android development, app developers are
                        allowed to incorporate these services in their apps. The
                        primary services provided by the Application Framework
                        are:
                      </p>
                      <h3 className="tab-seaction-subheading">
                        Notification Manager
                      </h3>
                      <p>
                        This service enables apps to display alerts and
                        notifications to the user.
                      </p>
                      <h3 className="tab-seaction-subheading">
                        Activity Manager
                      </h3>
                      <p>
                        This service is used to handle all aspects of the{" "}
                        <a href="">activity stack and application lifecycle.</a>
                      </p>
                      <h3 className="tab-seaction-subheading">
                        Resource Manager
                      </h3>
                      <p>
                        This service is used to get access to non-code embedded
                        resources, such as UI layouts, strings, color settings,
                        etc.
                      </p>
                      <h3 className="tab-seaction-subheading">
                        Content Providers
                      </h3>
                      <p>
                        This service allows an app to publish data and share it
                        with other apps.
                      </p>
                      <h3 className="tab-seaction-subheading">View System</h3>
                      <p>
                        This offers an extensible set of views that is used to
                        develop application UIs.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        5. Applications
                      </h3>
                      The topmost layer of the Android Architecture is made of
                      all the Android Applications. On this layer, applications
                      are written to be installed. That is to say, both the
                      native and third-party apps, such as browser, games,
                      contacts, gallery, email, music, etc., are written to be
                      installed in this layer only. This layer of Applications
                      runs within the Android Runtime by using the services and
                      classes that are provided by the Application Framework.
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="forth">
                    <div className="tab-content-inner">
                      <h3 className="tab-seaction-heading">
                        Android Components
                      </h3>
                      <div className="tab-Table-content">
                        <h6 className="tab-Table-content-heading">
                          Table of Content
                        </h6>
                        <ul>
                          <li>
                            <a href="">Android Applications</a>
                          </li>
                          <li>
                            <a href="">Android Components</a>
                          </li>
                          <li>
                            <a href="">Main Android Components</a>
                          </li>
                          <li>
                            <a href="">Additional Android Components</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="tab-emergence">
                      <p>
                        When it comes to the name, a mobile application may also
                        be known as an app, online app, smart phone app or web
                        app. Mobile applications, mostly referred to as apps,
                        are nothing but a type of application software. These
                        softwares are designed to run on a mobile device, such
                        as a tablet or a smart phone.
                      </p>
                      <p>
                        Mobile apps were originally developed to provide their
                        users with services that users accessed on personal
                        computers. To be more precise, an app is generally a
                        small and individual software unit and, therefore, has
                        very limited functionality. Nonetheless, mobile apps
                        have become extremely popular these days, and this trend
                        is only going to get bigger in the future.
                      </p>
                      <p>
                        The beginning of the popularity can be traced back to
                        the first five hundred apps of Apple App Store, or if we
                        go back further, it goes back to the simple yet
                        addictive Snake game in the 6110 Nokia phone. Since
                        then, many companies have stepped forward and introduced
                        their versions of the mobile app. Out of these
                        companies, many have gained universal acclaim due to
                        their easy to use, attractive and intelligent apps. One
                        such type of app is the Android application.
                      </p>

                      <h3 className="tab-seaction-heading subminheading">
                        Android Applications
                      </h3>
                      <p>
                        In 2008, Android Applications were first introduced to
                        the world with the arrival of Android Market, which is
                        known as Google Play Store now. In the initial years,
                        the platform had only sixteen thousand apps; however,
                        the number was only going to rise in the future. Due to
                        the unmatchable usability and remarkable convenience
                        provided by Android apps, a huge population has become
                        attracted to not only use but develop them as well.
                      </p>
                      <p>
                        Today, the renowned Google Play Store has about 2.87
                        million Android apps. In addition to that, the apps are
                        highly rated with an average of 4.1 stars out of 5. In
                        2020, mobile applications are expected to generate
                        revenue of more than 581 billion US dollars, and a huge
                        reason for being able to hit that milestone is going to
                        be Android Applications.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        Android Components
                      </h3>
                      <p>
                        The secret of the unimaginable success of Android
                        Applications is hidden inside them. The essential
                        building blocks, more commonly known as Android
                        Components, of an Android application are the key to the
                        great outcomes. Basically, the Android Components of an
                        application enable it to have numerous qualities to make
                        it highly competent and efficient.
                      </p>
                      <p>
                        Each of all the Android Components has a specific
                        purpose, which is incredibly crucial for a great app
                        performance. Also, the application manifest file or the
                        AndroidManifest.xml file is responsible for loosely
                        coupling the Android Components. Among other duties,
                        this file describes all the Android Components and how
                        one of them interacts with the rest.
                      </p>
                      <p>
                        To make it easier to understand, we will divide the
                        Android Components into two categories:
                      </p>

                      <h3 className="tab-seaction-subheading">
                        Main Android Components
                      </h3>
                      <p>
                        There are four main Android Components that can be used
                        within an app. These components are:
                      </p>
                      <ul>
                        <li>Activities</li>
                        <li>Services</li>
                        <li>Broadcast Receivers</li>
                        <li>Content Providers</li>
                      </ul>
                      <h3 className="tab-seaction-heading subminheading">
                        1. Activities
                      </h3>
                      <p>
                        Basically, an activity represents a single screen with a
                        UI (User Interface). In other words, an activity of an
                        app performs actions on the screen. Therefore, an
                        Android activity is one screen of a UI of an Android
                        app. For better understanding, consider an email app,
                        such as Gmail. Gmail has one activity that shows a list
                        of emails, another activity for composing an email and
                        so on.
                      </p>
                      <p>
                        Many of you must have noticed that an Android app may
                        contain one or more activities or screens, each with
                        some changes in the UI. One of these activities is known
                        as the main activity that is displayed when the
                        application is launched. After opening the main
                        activity, the app may make it possible for the user to
                        open other activities.
                      </p>
                      <p>
                        To sum it up, an activity dictates the UI and manages
                        all the interactions a user has with the smart phone
                        screen.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        2. Services
                      </h3>
                      <p>
                        In Android, services are processes taking place in the
                        background. These processes can be executed on an
                        Android device even when no application is visible. For
                        this reason, services do not need any UI.
                      </p>
                      <p>
                        Android services can be used for many operations. For
                        instance, a service could back up data every hour. Also,
                        a service might play music in the background when the
                        user is working on another application. An Android
                        service could even check a remote server for updates. It
                        may even fetch data over the network without
                        interrupting a user’s interaction with an activity.
                      </p>
                      <p>
                        In a nutshell, services in Android manage background
                        operations related to an application.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        3. Broadcast Receivers
                      </h3>
                      <p>
                        In an Android app, a broadcast receiver only responds to
                        messages. These messages may either come from a
                        different application or from the system.
                      </p>
                      <p>
                        To give you an idea, an application may initiate a
                        broadcast in order to tell a second application that
                        some data has been downloaded to the device and that the
                        second application can now use the data. The second
                        application, in this example, is the broadcast receiver
                        that intercepts this communication and takes an
                        appropriate action.
                      </p>
                      <p>
                        An Android app developer implements a broadcast receiver
                        as a subclass of BroadcastReceiver class. Also, in a
                        broadcast receiver, each message is broadcasted as an
                        Intent object.
                      </p>
                      <p>
                        In short, a broadcast receiver is responsible for
                        handling the communication between the Android operating
                        system and the applications.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        {" "}
                        4. Content Providers
                      </h3>
                      <p>
                        The last of the main Android Components is the content
                        provider, which transfers data from one application to
                        other applications on request. These requests are
                        managed by Content Resolver class methods. The said data
                        is stored in the database, file system or anywhere else.
                      </p>
                      <p>
                        To implement a content provider, an Android app
                        developer uses it as a subclass of Content Provider
                        class. Another important point about content providers
                        is that a standard set of APIs must be implemented to
                        enable other apps to perform transactions.
                      </p>
                      <p>
                        Briefly, one can say that content providers handle data
                        and issues associated with data management.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        Additional Android Components
                      </h3>
                      <p>
                        Generally, there are six additional Android Components.
                        Basically, these additional Android Components are used
                        to build the main Android Components, their logic and
                        the wiring between them. These additional components
                        are:
                      </p>
                      <ul>
                        <li>Intents</li>
                        <li>Fragments</li>
                        <li>Layouts</li>
                        <li>Views</li>
                        <li>Resources</li>
                        <li>Manifest</li>
                      </ul>
                      <h3 className="tab-seaction-heading subminheading">
                        1. Intents
                      </h3>
                      <p>
                        In Android, intents are small objects or messages that
                        an activity passes to the operating system. This is done
                        so that the activity can tell the operating system that
                        a different action or activity is required. For example,
                        when a user chooses to share a photo through a photo
                        app, the app sends an intent to the operating. This
                        intent carries the description of the sharing action.
                        The Android system, then, opens a second application
                        that can share the photo to perform the action.
                      </p>
                      <p>
                        In simpler words, intents are messages that wire
                        application components together.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        2. Fragments
                      </h3>
                      <p>
                        A fragment, in an Android app, is literally a fragment
                        of the total UI in an activity. Therefore, a fragment
                        only takes up part of the screen, unlike an activity. A{" "}
                        <a href="">fragment</a> has to be used inside an
                        activity, and one fragment can be used within different
                        activities. Typically, a fragment contains Views and
                        ViewGroups inside it.
                      </p>
                      <p>
                        Shortly, a fragment represents a portion of UI in an
                        activity.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        3. Layouts
                      </h3>
                      <p>
                        Layouts are nothing but view hierarchies the handle
                        appearance of views and screen format. In Android
                        development, layout and contents of fragments,
                        ViewGroups and activities are defined by using XML
                        files. These layout XML files are used to specify the
                        GUI (Graphical User Interface) elements a fragment or
                        activity would have. Besides that, these files are also
                        used to specify the style (size, padding, etc.) of the
                        GUI elements.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        4. Views
                      </h3>
                      <p>
                        Basically, Android GUI components are of three types:
                        Activities, Views and View Groups. Views refer to the UI
                        components, such as list forms and buttons, which are
                        drawn on the screen. Other the other hand, a View Group
                        collects a number of Views together. Both Views and View
                        Groups are embedded by an activity or a fragment. If
                        they are nested inside a fragment, the fragment, as we
                        mentioned earlier, would be embedded by an activity.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        5. Resources
                      </h3>
                      <p>
                        In Android, resources refer to external elements, such
                        as images, constants and strings, which an application
                        uses. However, these elements are not in the form of any
                        programming language source code.
                      </p>
                      <p>
                        UI layouts are a type of Android resource. These layouts
                        are created by using a structured tool, like the GUI
                        builder of an IDE, or by hand in XML form. Sometimes,
                        the UI elements work in all kinds of devices. Other
                        times, they need to be tailored for different types of
                        devices. For that, a developer needs to put the
                        resources into resource sets that specify the
                        circumstances under which the resources should be used.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        6. Manifest
                      </h3>
                      <p>
                        The configuration file of an application is referred to
                        as Manifest file, common written as AndroidManifest.xml
                        file. In the manifest of an Android application, there
                        is information about the app package. This information
                        includes components of the app, such as services,
                        content providers, broadcast receivers and activities.
                      </p>
                      <p>
                        Apart from that, the manifest is responsible for
                        protecting the app by providing permissions to access
                        any protected parts. Also, it enlists the
                        instrumentation classes that provide profiling and other
                        information. Furthermore, manifest defines the Android
                        API that the application will be using.
                      </p>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth">
                    <div className="tab-content-inner">
                      <h3 className="tab-seaction-heading">
                        Environment Setup in Android Example
                      </h3>
                      <div className="tab-Table-content">
                        <h6 className="tab-Table-content-heading">
                          Table of Content
                        </h6>
                        <ul>
                          <li>
                            <a href="">Environment Setup steps</a>
                          </li>
                          <li>
                            <a href="">System Requirements</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="tab-emergence">
                      <p>
                        An environment setup in Android is the most basic step
                        involved in building a mobile application. First, we
                        need two things for environment setup in android – Java
                        Development Kit (JDK) and Android Studio. Then, after
                        setup we will see How to Setup an Android Emulator to
                        run a program.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        Environment Setup steps
                      </h3>
                      <h3 className="tab-seaction-subheading">Step 1</h3>
                      <p>
                        Download and Install Java Development Kit (JDK) from the
                        link given below. Follow the steps after downloading the
                        JDK.
                      </p>
                      <p>
                        <a href="https://www.oracle.com/technetwork/java/javase/downloads/index.html">
                          Download and install Java SE
                        </a>
                      </p>
                      <h3 className="tab-seaction-subheading">Step 2</h3>
                      <p>
                        Once you have download the JDK, download and install
                        Android Studio from the link given below. Select your
                        platform while installation. Follow the steps after
                        downloading the setup.
                      </p>
                      <p>
                        <a href="https://developer.android.com/studio/index.html#downloads">
                          Download and Install Android Studio
                        </a>
                      </p>
                      <p className="blog-img">
                        <img src="asstes/image/environmnet-setup-1.png" />
                      </p>
                      <p>
                        Once the Setup is completed, you can create your first
                        android application. To begin with creating your first
                        application click on Hello World Example Tutorials.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        System Requirements
                      </h3>
                      <h3 className="tab-seaction-subheading">Windows</h3>
                      <p>
                        Microsoft Windows 7 or tiger with 64-bit <br />
                        Minimum 4GB of RAM <br />
                        Hard-disk with minimum 2GB of storage
                      </p>
                      <h3 className="tab-seaction-subheading">MAC</h3>
                      <p>
                        Mac OS X 10.10 or higher <br />
                        Minimum 4GB of RAM <br />
                        Hard-disk with minimum 2GB of storage <br />
                      </p>
                      <h3 className="tab-seaction-subheading">Chrome OS</h3>
                      <p>
                        Intel I5 or higher <br />
                        Minimum 8GB of RAM <br />
                        Hard-disk with minimum 4GB of storage
                      </p>
                      <h3 className="tab-seaction-subheading">Linux</h3>
                      <p>
                        GNOME or KDE desktop <br />
                        GNU C Library 2.19 or higher <br />
                        Minimum 4GB of RAM <br />
                        Hard-disk with minimum 2GB of storage
                      </p>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="sexth">
                    <div className="tab-content-inner">
                      <h3 className="tab-seaction-heading">
                        Android Emulator Example
                      </h3>
                      <div className="tab-Table-content">
                        <h6 className="tab-Table-content-heading">
                          Table of Content
                        </h6>
                        <ul>
                          <li>
                            <a href="">Android Emulator Steps</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="tab-emergence">
                      <p>
                        In this tutorial we will see how to create{" "}
                        <b>Android Emulator</b> in Android.{" "}
                        <p>Android Emulator</p> is used to run a program which
                        emulates real device. We will create new emulator using
                        Android Virtual Device AVD manager. While creating the
                        device we can select API Level and device model.Its like
                        configuring your own device according to requirements.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        Android Emulator Steps
                      </h3>
                      <h3 className="tab-seaction-subheading">Step 1</h3>
                      <p>
                        Once you downloaded and installed Android Studio
                        successfully, go to Tool option in the menu and click on
                        AVD manager as shown in the image below.
                      </p>
                      <p className="blog-img">
                        <img src="asstes/image/emulator-1.png" />
                      </p>
                      <h3 className="tab-seaction-subheading">Step 2</h3>
                      <p>
                        In second step we will Create Virtual Device. To create
                        a virtual device click on Create virtual Device option.
                      </p>
                      <p className="blog-img">
                        <img src="asstes/image/emulator-2-768x469.png" />
                      </p>
                      <h3 className="tab-seaction-subheading">Step 3</h3>
                      <p>
                        Now new window will open with <b>Select Hardware</b>{" "}
                        message. Create your own <b>“New Hardware Profile”</b>{" "}
                        or simply select any device from the given list. Click
                        on Next once Hardware Profile is configured.
                      </p>
                      <p className="blog-img">
                        <img src="asstes/image/emulator-3-768x469.png" />
                      </p>
                      <h3 className="tab-seaction-subheading">Step 4</h3>
                      <p>
                        Select your desired API level and click on <b>Next</b>{" "}
                        to continue.
                      </p>
                      <p className="blog-img">
                        <img src="asstes/image/emulator-4-768x469.png" />
                      </p>
                      <h3 className="tab-seaction-subheading">Step 5</h3>
                      <p>
                        Give your new profile a name and select{" "}
                        <b>Startup Orientation</b> and click finish to create
                        your Android Emulator.
                      </p>
                      <p className="blog-img">
                        <img src="asstes/image/emulator-5-768x469.png" />
                      </p>
                      <h3 className="tab-seaction-subheading">Step 6</h3>
                      <p>
                        Now you will be able to see you device in{" "}
                        <b>“Your Virtual Devices”</b>.
                      </p>
                      <p className="blog-img">
                        <img src="asstes/image/emulator-6-768x469.png" />
                      </p>
                      <h3 className="tab-seaction-subheading">Step 7</h3>
                      <p>
                        Run you application. Here you will be able to see your
                        device in <b>“Available Devices”</b> in drop down menu.
                      </p>
                      <p className="blog-img">
                        <img src="asstes/image/emulator-7.png" />
                      </p>
                      <p>
                        Now you will be able to see your device as show in image
                        below.
                      </p>
                      <p className="blog-img">
                        <img src="asstes/image/emulator-8.png" />
                      </p>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="seven">
                    <div className="tab-content-inner">
                      <h3 className="tab-seaction-heading">
                        Hello World Example in Android
                      </h3>
                    </div>
                    <div className="tab-emergence">
                      <p>
                        In this tutorial we will see how to create{" "}
                        <b>Hello World Example</b> application in android using
                        Android Studio. Here we will use TextView widget and
                        print <b>Hello World</b> message.
                      </p>
                      <p>
                        To begin with <b>Hello World Example</b> application
                        start Android Studio and you will see message Welcome to
                        Android Studio message. We will create new application
                        so we will select “Start a new Android Studio project”.
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        Follow the steps to create Hello World program
                      </h3>
                      <h3 className="tab-seaction-subheading">Step 1</h3>
                      <p className="blog-img">
                        <img src="asstes/image/helloworld-1.png" />
                      </p>
                      <p>
                        Now you can see many small activities. To begin with we
                        will select Empty Activity and press Next. This will
                        create new blank Activity.
                      </p>
                      <h3 className="tab-seaction-subheading">Step 2</h3>
                      <p className="blog-img">
                        <img src="asstes/image/emulator-2-768x469.png" />
                      </p>
                      <p>
                        Now enter you name in Name box. Example – Hello World
                      </p>
                      <ul>
                        <li>
                          In Package name put you package name. Example –
                          com.androidaura.helloworld
                        </li>
                        <li>
                          Next select location where this project should be
                          saved.
                        </li>
                        <li>
                          In Language specify in which language you will be
                          programming. Example we will select “Java” here.
                        </li>
                        <li>
                          Select minimum API Level to begin with. Example we
                          have selected API 21: Android 5.0 (Lollipop)
                        </li>
                      </ul>
                      <p>
                        Click on <b>Finish</b> button once done.
                      </p>
                      <h3 className="tab-seaction-subheading">Step 3</h3>
                      <p className="blog-img">
                        <img src="asstes/image/helloworld-3.png" />
                      </p>
                      <p>
                        Once you created an application two files will be
                        generated.
                      </p>
                      <ul>
                        <li>MainActivity.class</li>
                        <li>activity_main.xml</li>
                      </ul>
                      <p>
                        MainActivity.java is a class file in which you will
                        write java program.
                      </p>
                      <p>
                        <b>MainActivity.java</b>
                      </p>
                      <div className="code-section">
                        <code>
                          {`package com.androidaura.helloworld; }`}
                          <br />
                          <br />
                          {`import android.support.v7.app.AppCompatActivity;`}
                          <br />
                          {`public class MainActivity extends AppCompatActivity {`}
                          <br />
                          <br />
                          &nbsp; &nbsp;{`@Override`}
                          <br />
                          &nbsp; &nbsp;{`    protected void onCreate(Bundle savedInstanceState) {`}
                          <br />
                          &nbsp; &nbsp;&nbsp;{`super.onCreate(savedInstanceState);`}
                          <br />
                          &nbsp; &nbsp;&nbsp;{`setContentView(R.layout.activity_main);`}
                          <br />
                          &nbsp; &nbsp; {`}`}
                          <br />
                          {`}`}
                          <br />
                        </code>
                      </div>
                      <p>
                        This is activity_main.xml file, here we will write code
                        rated to xml. Below we are using TextView widget and
                        will display Hello World! message. activity_main.xml
                      </p>
                      <div className="code-section">
                        <code>
                          {`<?xml version="1.0" encoding="utf-8"?> }`}
                          <br />
                          {`<android.support.constraint.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"`}
                          <br />
                          &nbsp; &nbsp;{` xmlns:app="http://schemas.android.com/apk/res-auto" `}
                          <br />
                          &nbsp; &nbsp;{` xmlns:tools="http://schemas.android.com/tools" `}
                          <br />
                          &nbsp; &nbsp;{` android:layout_width="match_parent" `}
                          <br />
                          &nbsp; &nbsp;{` android:layout_height="match_parent" `}
                          <br />
                          &nbsp; &nbsp;{` tools:context=".MainActivity"> `}
                          <br />
                          <br />
                          &nbsp; &nbsp; {`<TextView`}
                          <br />
                          &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{` android:layout_width="wrap_content" `}
                          <br />
                          &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{` android:layout_height="wrap_content" `}
                          <br />
                          &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{` android:text="Hello World!" `}
                          <br />
                          &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{` android:textSize="30sp" `}
                          <br />
                          &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{` android:textStyle="bold" `}
                          <br />
                          &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{` app:layout_constraintBottom_toBottomOf="parent" `}
                          <br />
                          &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{` app:layout_constraintLeft_toLeftOf="parent" `}
                          <br />
                          &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{` app:layout_constraintRight_toRightOf="parent" `}
                          <br />
                          &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{` app:layout_constraintTop_toTopOf="parent" /> `}
                          <br />
                          {` </android.support.constraint.ConstraintLayout> `}
                          <br />
                        </code>
                      </div>
                      <p>
                        Press run button to run you application as shown below
                      </p>
                      <h3 className="tab-seaction-subheading">Step 4</h3>
                      <p>
                        Select your desired API level and click on <b>Next</b>{" "}
                        to continue.
                        <p className="blog-img">
                          <img src="asstes/image/helloworld-4.png" />
                        </p>
                        <p>
                          Select and emulator in which you want program should
                          run.
                        </p>
                        <p>
                          Check below link if you don’t know how to create
                          emulator in android.
                        </p>
                        <a href="">Android Emulator</a>
                      </p>
                      <h3 className="tab-seaction-subheading">Step 5</h3>
                      <p className="blog-img">
                        <img src="asstes/image/helloworld-5.png" />
                      </p>
                      <p>Below is the output of the program</p>
                      <b>Output</b>
                      <p className="blog-img">
                        <img
                          style={{ width: "auto" }}
                          src="asstes/image/helloworld-6.png"
                        />
                      </p>
                      <p>Home {`>>`} Android Menu</p>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="eight">
                    <div className="tab-content-inner">
                      <h3 className="tab-seaction-heading">
                        Activity Lifecycle in Android​
                      </h3>
                      <div class="tab-Table-content">
                        <h6 class="tab-Table-content-heading">
                          Table of Content
                        </h6>
                        <ul>
                          <li>Activity lifecycle Diagram Android</li>
                          <li>Android</li>
                          <li>Activity in Android</li>
                          <li>Activity Lifecycle in Android</li>
                          <li>Activity Lifecycle and the Activity Stack</li>
                          <li>States of an Activity Lifecycle</li>
                          <li>
                            States of an Activity Lifestyle and Their Visibility
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="tab-emergence">
                      <h3 className="tab-seaction-heading subminheading">
                        Activity lifecycle Diagram Android
                      </h3>
                      <p className="blog-img">
                        <img src="asstes/image/activity.png" />
                      </p>
                      <p className="table-heading">Methods & Callbacks</p>
                      <Table striped bordered hover>
                        <tbody>
                          <tr>
                            <td>onCreate()</td>
                            <td>Activity is created first time</td>
                          </tr>
                          <tr>
                            <td>onStart()</td>
                            <td>Activity visible to user</td>
                          </tr>
                          <tr>
                            <td>onResume()</td>
                            <td colSpan="2">User interaction with activity</td>
                          </tr>
                          <tr>
                            <td>onPause()</td>
                            <td colSpan="2">Activity is not visible</td>
                          </tr>
                          <tr>
                            <td>onStop()</td>
                            <td colSpan="2">
                              Activity No longer visible to user
                            </td>
                          </tr>
                          <tr>
                            <td>onRestart()</td>
                            <td colSpan="2">
                              Activity is stopped, and will start again
                            </td>
                          </tr>
                          <tr>
                            <td>onDestroy()</td>
                            <td colSpan="2">Activity is destroyed</td>
                          </tr>
                        </tbody>
                      </Table>
                      <p>
                        With every button you press and every option you choose
                        on your smart phone, a number of processes take place
                        behind the screen of your device. It might just be a
                        little swipe for you, but it brings about a huge change
                        in the app or the device you are using. These changes
                        are highly systematic and carefully planned in order to
                        give you—the user—a smooth experience.
                      </p>
                      <p>
                        All this might sound very interesting to a layman, but
                        it is the key to making an efficient app for an Android
                        app developer. Whether you are a beginner, an app
                        developer or just someone reading this out of curiosity,
                        this article will prove to be greatly informative for
                        you. In this article, we will give you a detailed
                        explanation that will cover each and every important
                        point a person needs to know about Activity Lifecycle in
                        Android. For this reason, we will have a look at:
                      </p>
                      <p>
                        <h3 className="tab-seaction-heading subminheading">
                          Android
                        </h3>
                      </p>
                      <p>
                        Android is not just any operating system; it is an open
                        source operating system. This means that the original
                        source code of Android is freely available and can be
                        used for viewing and modification. The Android operating
                        system is based on Linux with a Java programming
                        interface, and this operating system is for mobile
                        devices, such as smart phones, tablets, etc.
                      </p>
                      <p>
                        The Android operating system consists of multiple APIs
                        (Application Program Interfaces) so that it can support
                        services that are based on location, like GPS. In
                        addition to that, the operating system supports
                        multimedia hardware control for playback and recording.
                        Moreover, it can multitask so that a user can change
                        task windows and open multiple applications (or apps) at
                        a time. This allows the user to reuse the app components
                        and replace native apps.
                      </p>
                      <p>
                        <h3 className="tab-seaction-heading subminheading">
                          Activity in Android
                        </h3>
                      </p>
                      <p>
                        An Activity in Android is always in front of the user.
                        If you open an app in Android right now, some UI (user
                        interface) elements will appear on your screen. This new
                        window or screen is called an Activity in Android.
                        Whenever you open an app, you always initiate an
                        Activity in the operating system. Being such a recurring
                        thing makes Activity a basic component of Android.
                      </p>
                      <p>
                        A real life example of an Activity in Android can be
                        taken from the Gmail application. Consider that you have
                        opened your Gmail app. The first thing you would see is
                        your inbox, showing the emails you have received. Those
                        emails appearing on your screen are part of an Activity.
                        If you click and open one of your emails, that email
                        would be opened in another Activity.
                      </p>
                      <p>
                        In better words, an Activity in Android is a class that
                        is used to provide a window where UI elements of an app
                        are drawn. The first screen or Activity that a user
                        interacts with right after opening an app is usually
                        referred to as MainActivity. Any Activity can be called
                        from any Activity.
                      </p>
                      <p>
                        When a developer starts coding for his project, he knows
                        about the main method from which the program initiates
                        execution. In the same manner, Android apps initiate
                        their process from an Activity. As mentioned above, an
                        Activity is one screen of the UI of an app. Also, we see
                        many screens in an app, one after the other. This means
                        that there is a lifecycle associated with each Activity
                        of an app. To form a code free of errors and create a
                        well-developed app, an Android app developer must
                        understand the lifecycle of an Activity.
                      </p>
                      <p>
                        <h3 className="tab-seaction-heading subminheading">
                          Activity Lifecycle in Android
                        </h3>
                      </p>
                      <p>
                        Android apps work differently than typical apps that we
                        see on laptops. When compared with a laptop, the
                        resources in a smart phone are limited (smaller screen,
                        less memory, shorter battery life, etc.). Due to these
                        limitations, a smart phone cannot easily display more
                        than one app simultaneously. Therefore, in a smart
                        phone, only one app is in the foreground at a given
                        time.
                      </p>
                      <p>
                        This is not so bad because smart phones were originally
                        made to be used on the go, and, in such a situation, a
                        user can only focus on one app at a time. That being
                        said, other apps can be opened by pushing the current
                        app to the back. When the user is done working on the
                        newly-opened second app, he can close it to bring the
                        first app back in the foreground. This whole mechanism
                        is the same for an Activity in Android.
                      </p>
                      <p>
                        Therefore, an app or Activity can go through many
                        possible states, and the set of all these possible
                        states is collectively called an Activity Lifecycle.
                      </p>
                      <p>
                        <h3 className="tab-seaction-heading subminheading">
                          Activity Lifecycle and the Activity Stack
                        </h3>
                      </p>
                      <p>
                        As you navigate through an Android app, different stages
                        of an Activity lifecycle come in action. Basically,
                        Activities in Android are seen and treated like an
                        Activity “Stack.” To understand this concept better,
                        picture yourself opening an Activity. In an Activity
                        Stack, this newly-opened Activity would be placed on the
                        top of the stack. When an Activity is on top of the
                        stack, it means that it is the currently running
                        Activity.
                      </p>
                      <p>
                        Now, picture yourself opening a second Activity. This
                        second Activity will now replace the first Activity in
                        the Activity Stack, moving to the top of the stack. For
                        this reason, the first Activity will go below the second
                        and will not come to the top again until the second
                        Activity is running.
                      </p>
                      <p>
                        The Activity class comes with a number of callbacks.
                        These callbacks enable the Activity to learn that a
                        state has been changed. For instance, these changes
                        inform the Activity that the system it inhabits is being
                        created, resumed, stopped, etc.
                      </p>
                      <p>
                        <h3 className="tab-seaction-heading subminheading">
                          States of an Activity Lifecycle
                        </h3>
                      </p>
                      <p>
                        The Activity Lifecycle comprises various states, or we
                        can say that an Activity goes through various states in
                        its lifecycle. Note: You must be careful and not mix
                        these states up with the methods involved in an Activity
                        Lifecycle. To make it easier for you, the states of an
                        Activity Lifestyle are governed by those methods. An
                        Activity Lifecycle has six interlinked states:
                      </p>
                      <p>
                        1. When an Activity is in the foreground of a screen (or
                        at the top of the stack), it is said to be in the
                        running or resumed state. To achieve the foreground, the
                        activity has to be created, started and then sent to the
                        resumed state. This is the activity that the user is
                        currently interacting with, and the Android operating
                        system does not recycle such an activity under normal
                        circumstances.
                      </p>
                      <p>
                        2. In some cases, the activity on the top of the stack
                        does not occupy the whole screen. Therefore, if an
                        activity is not on the top spot anymore but is still
                        visible, it is said to be in the paused state. However,
                        the Android system would kill this paused activity, to
                        release the resources, if the memory is low. Also, when
                        an activity opens a second activity, the first activity
                        achieves the paused state. In both the scenarios, when
                        the user goes back to the first activity, the first
                        activity returns to the resumed state.
                      </p>
                      <p>
                        3. When an activity is being sent to a lower spot of the
                        stack to be completely invisible, it goes through the
                        paused state and then to the stopped state. In the
                        stopped state, the activity still retains all the
                        information. If a stopped activity is opened again, it
                        is first started and then sent to the resumed state.
                        However, if the system is running low on memory, it
                        would kill the stopped activity to free up the
                        resources.
                      </p>
                      <p>
                        4. When the Android system is removing the activity from
                        the stack (by either asking it to finish or simply
                        killing it), the activity is said to be in the destroyed
                        state. If the user wishes to display a destroyed
                        activity, he must restart it completely to restore it to
                        its previous state.
                      </p>
                      <p>
                        <h3 className="tab-seaction-heading subminheading">
                          States of an Activity Lifestyle and Their Visibility
                        </h3>
                      </p>
                      <p>
                        While learning about Activity Lifestyle and its states,
                        one can find it difficult to visualize the states in his
                        mind. Not only that, it is significantly tough for a
                        beginner to understand which state is even visible and
                        which state is not. So here are some points to eliminate
                        those confusions:
                      </p>
                      <p className="Lifecycle-list">
                        <ul>
                          <li>
                            1. In the created state, the activity is not yet
                            visible
                          </li>
                          <li>
                            2. In the started state, the activity is visible
                          </li>
                          <li>
                            3. In the resumed state, the activity is visible
                          </li>
                          <li>
                            4. In the paused state, the activity is partially
                            visible
                          </li>
                          <li>
                            5. In the stopped state, the activity is hidden
                          </li>
                          <li>
                            6. In the destroyed state, the activity is invisible
                            as it has gone from the memory
                          </li>
                        </ul>
                      </p>
                      <p>
                        This was all an Android app developer needs to know
                        about Activity Lifecycle in Android before starting to
                        code the Activity Lifecycle into his project. The
                        article should make it clear to all readers that
                        Activity Lifecycle is one of the most important aspects
                        of Android, and, thus, it should not be ignored while
                        developing an app. Without the Activity Lifecycle in
                        Android, an app would have no systematic way of
                        functioning whatsoever. In fact, it is also possible for
                        an app to not even start without the Activity Lifecycle.
                        Therefore, the Activity Lifecycle must be taken very
                        seriously by beginners and, especially, Android app
                        developers.
                      </p>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="ninth">
                    <div className="tab-content-inner">
                      <h3 className="tab-seaction-heading">
                        Activity Lifecycle in Android​
                      </h3>
                      <p>
                        In this article, all the crucial aspects of{" "}
                        <b>Fragment Lifecycle in Android</b> will be explained.
                        This includes everything, ranging from the basics of
                        Fragment in Android to methods used for{" "}
                        <b>Fragment Lifecycle in Android</b>. For this reason,
                        we have divided this article in the following sections:
                      </p>
                      <div class="tab-Table-content">
                        <h6 class="tab-Table-content-heading">
                          Table of Content
                        </h6>
                        <ul>
                          <li>Fragment in Android</li>
                          <li>Examples of Fragments in Android</li>
                          <li>Types of Fragments in Android</li>
                          <li>Fragment Lifecycle in Android</li>
                        </ul>
                      </div>
                    </div>
                    <div className="tab-emergence">
                      <p className="blog-img">
                        <img
                          style={{ width: "auto" }}
                          src="asstes/image/Fragment.png"
                        />
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        Fragment in Android
                      </h3>
                      <p>
                        In Android app development, many tools are used to add
                        features in an app to provide the user a smooth and
                        convenient experience. As the user navigates through the
                        app, many of these features go through a number of
                        states one after the other. In other words, it can be
                        said that those features have set lifecycles.
                      </p>
                      <p>
                        The term “lifecycle” is one of the most recurring words
                        in Android development. If you are studying Android app
                        development, you will come across this term a lot times.
                        In order to create a well-developed Android app, it is
                        important to study lifecycles of many things, which
                        includes activity, service, view, application and
                        fragment. That being said, the main focus of this
                        article would be on Fragment Lifecycle in Android.
                      </p>
                      <p>
                        Fragments are a useful and powerful tool in Android
                        development. They were introduced in the Android API
                        with the Honeycomb version, which is API level 11. With
                        the help of the fragment class, an Android app developer
                        can create dynamic UIs (User Interfaces). In Android, a
                        Fragment is a part of an Activity that is used to make
                        the activity design more modular. Therefore, it is
                        easier to understand fragment by thinking of it as a
                        kind of sub-activity. In Android development, a fragment
                        is added with the help of the element.
                      </p>
                      <p>
                        Although it is a part of an activity, a fragment has its
                        own lifecycle and input events. A number of fragments
                        can be added in a single activity to build a multi-pane
                        UI. Conversely, a single fragment can be used in a
                        number of activities of an app. In either case, it is
                        necessary that a fragment must always be embedded in an
                        activity, and, for this reason, the Fragment Lifecycle
                        heavily depends upon the lifecycle of its embedding
                        activity. The Activity Lifecycle and Fragment Lifecycle
                        are so closely linked together that all fragments in an
                        activity get stopped when the host activity is paused.
                      </p>
                      <p>
                        It is not mandatory for an app to have fragments, but
                        many apps make use of them to modify their appearances,
                        to make it easier to adjust a single app design in
                        various devices of different sizes and improve the
                        flexibility of the UI. Speaking of UI, it is also
                        possible to add fragments in an Android app without
                        having any UI.
                      </p>
                      <p>
                        Because fragments are closely linked with device size,
                        it is important to study their application in
                        differently sized devices. For example, an app opened in
                        a tablet can show two fragments in a single activity
                        simultaneously; however, the same app opened in a smart
                        phone will have to show the two fragments in two
                        different activities because of the reduced screen size.
                      </p>
                      <p>
                        <h3 className="tab-seaction-heading subminheading">
                          Examples of Fragments in Android
                        </h3>
                      </p>
                      <p>
                        Being such a helpful tool for Android app developers and
                        users both, fragments are found in nearly every
                        application. As an example, consider the WhatsApp
                        application. When you open the WhatsApp application in
                        your smart phone, you see three fragments near the top
                        of the first activity. The three fragments are titled as
                        “CHATS,” “STATUS” and “CALLS,” and when you swipe your
                        screen, you open a fragment out of the three.
                      </p>
                      <p>
                        For the second example, consider opening the Gmail
                        application on a tablet in the landscape mode. After
                        opening the Gmail app, the first activity that appears
                        on your screen shows a list of emails. When you select
                        one of the mails, it opens on the right side of the
                        screen by reducing the width of the list. The box
                        showing the details of the selected mail on the right
                        side and the list of emails on the left side are both
                        fragments, and, in this case, both the fragments appear
                        on a single activity simultaneously because of the
                        larger screen size.
                      </p>
                      <p>
                        <h3 className="tab-seaction-heading subminheading">
                          Types of Fragments in Android
                        </h3>
                      </p>
                      <p>
                        To fully understand Fragment Lifecycle in Android, one
                        must know what fragment is, and, for that, studying
                        fragment types is very important. Basically, all types
                        of fragments are created in the same way, but the way
                        they are used is different. In a fragment, there are two
                        parts: UI and code.
                      </p>
                      <p>
                        You can either create the UI of the fragment either by
                        coding or inflating the XML layout file without changing
                        the behavior of the fragment. However, after defining
                        the fragment, you must choose which type fragment you
                        wish to add. In Android, there are two main types of
                        fragments:
                      </p>
                      <p class="Lifecycle-list">
                        <ul>
                          <li>1. Static Fragment</li>
                          <li>2. Dynamic Fragment</li>
                        </ul>
                      </p>
                      <h3 className="tab-seaction-heading subminheading">
                        Fragment Lifecycle in Android
                      </h3>
                      <p>
                        As mentioned above, each fragment has its own Fragment Lifecycle, and these lifecycles are directly related to the embedding activity lifecycle. Even the most experienced Android app developers get puzzled when it comes to Fragment Lifecycle in Android. So it is important for Android developers to be careful while studying the Fragment Lifecycle. The following diagram illustrates a common Fragment Lifecycle in Android:
                      </p>
                      <p>
                        While managing a Fragment Lifecycle, a developer first adds the fragment in his project. For that, the onAttach() method is first used because it lets it known that the fragment has been attached to an activity and which activity the fragment has been attached to.
                      </p>
                      <p>
                      After that, the onCreate() method is called right after the onAttach() method when the fragment is created and when the fragment instance initializes.
                      </p>
                      <p>
                        In the next step, the onCreateView() method is called in order to make the fragment draw its UI. In order to draw a UI in the fragment, it is important that a View component is returned from this method, which is the root of the layout of the fragment. However, if the fragment is not supposed to have any UI, it can be returned empty or null.
                      </p>
                      <p>
                        The next stage sees the calling of the onActivityCreated() method. With this method, it is indicated that the host activity or the embedding activity is created. In other words, this method indicates that the onCreate() method of the host activity has taken place.
                      </p>
                      <p>
                        When everything is created, the onStart() method is called. This method indicates that the fragment is visible because it is called right after the fragment gets visible.
                      </p>
                      <p>
                        Now that the fragment is visible, a user can interact with it. Therefore, at this stage, the onResume() method is called to resume the fragment and to make it functional for the user. It is important to know that a fragment only resumes after its activity has been resumed.
                      </p>
                      <p>
                        A resumed fragment can only go towards going off the screen.
                      </p>
                      <p>
                      For this path, the resumed fragment first becomes invisible to the user. At this stage, the onPause() method is called, which signifies that the user is leaving the fragment. This happens when a fragment is removed from the activity, added to the back stack, replaced by a new fragment and other similar cases.
                      </p>
                      <p>
                      Afterwards, the onStop() method is called when the fragment is going to be stopped. As this happens when the fragment is no longer visible, this method is always called after the onPause() method. A fragment is stopped after it is paused for the reasons mentioned above or when the host activity is stopped.
                      </p>
                      <p>
                      Subsequently, whatever we created on the fragment by using the onCreateView() method will be reversed in the stopped fragment. The onDestroyView() method is called when the view and other related resources are removed and destroyed from the view hierarchy of the activity.
                      </p>
                      <p>
                        If the fragment is waiting on the back stack after being paused and the user now wants it back to the layout, the onCreateView() method is called once again after the onDestroyView() method.
                      </p>
                      <p>
                        If the onCreateView() method is not called then the onDeathView() method is followed by the calling of the onDestroy() method finally. With this method, the fragment goes through its final clean-up; however, it is not certain that the Android platform would call it.
                      </p>
                      <p>
                        Then the fragment is disassociated and detached from its embedding activity. To notify this event, the onDetach() method is called after the onDestroy() method. After this, the fragment is completely destroyed.
                      </p>
                      <p>
                      And that was everything that an app developer needs to know about Fragment Lifecycle in Android. We hope you got an understanding of the basics of Android Fragment and Fragment Lifecycle that is firm and clear enough for you to continue your research. Also, we hope that you now understand the use of fragments and how important they can be for a smart app design.
                      </p>

                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tenth">
                      <h3 className="tab-seaction-heading">
                        TextView in Android Example
                      </h3>
                      <div className="code-section">
                        <code>
                          {` // Set text for text view }`}
                          <br />
                          <br />
                          {`//XML`}
                          <br />
                          {`<TextView`}
                          <br />
                          {`android:layout_width="wrap_content"`}
                          <br />
                          {`android:layout_height="wrap_content"`}
                          <br />
                          {`android:text="Android Aura"/>`}
                          <br />
                          <br />
                          {`//JAVA `}
                          <br />
                          {`TextView tv = findViewById(R.id.tv);`}
                          <br />
                          {`tv.setText("Android Aura");`}
                          <br />
                        </code>
                      </div>
                      <div className="code-section">
                        <code>
                          {` //Set Text Size`}
                          <br />
                          <br />
                          {`//XML`}
                          <br />
                          {`<TextView android:id="@+id/tv"`}
                          <br />
                          {`android:layout_width="wrap_content"`}
                          <br />
                          {`android:layout_height="wrap_content"`}
                          <br />
                          {`android:textSize="22sp"`}
                          <br />
                          {`android:text="Android Aura"/>`}
                          <br />
                          <br />
                          {`//JAVA `}
                          <br />
                          {`TextView tv = findViewById(R.id.tv);`}
                          <br />
                          {`tv.setText("Android Aura"); `}
                          <br />
                          {`tv.setTextSize(22); `}
                          <br />
                        </code>
                      </div>
                      <div className="code-section">
                        <code>
                          {` //Set Text Color`}
                          <br />
                          <br />
                          {`//XML`}
                          <br />
                          {`android:textColor="#1C83EA"`}
                          <br />
                          {` android:textColor="@color/colorAccent" `}
                          <br />
                          <br />
                          {`//JAVA `}
                          <br />
                          {` TextView tv = findViewById(R.id.tv); `}
                          <br />
                          {` tv.setText("Android Aura");  `}
                          <br />
                          {` tv.setTextSize(22); `}
                          <br />
                        </code>
                      </div>
                      <div className="code-section">
                        <code>
                          {` //Set Text Color`}
                          <br />
                          <br />
                          {`//XML`}
                          <br />
                          {` android:background="#F7DC6F" `}
                          <br />
                          <br />
                          {`//JAVA `}
                          <br />
                          {` tv.setBackgroundColor(Color.parseColor("#F7DC6F")); `}
                          <br />
                        </code>
                      </div>
                      <div className="code-section">
                        <code>
                          {` // Text all CAPS`}
                          <br />
                          <br />
                          {`//XML`}
                          <br />
                          {` android:textAllCaps="true" `}
                          <br />
                          <br />
                          {`//JAVA `}
                          <br />
                          {` tv.setAllCaps(true); `}
                          <br />
                        </code>
                      </div>
                      <div className="code-section">
                        <code>
                          {` // Text Font Family`}
                          <br />
                          <br />
                          {`//XML`}
                          <br />
                          {` android:fontFamily="sans-serif"  `}
                          <br />
                        </code>
                      </div>
                      <div className="code-section">
                        <code>
                          {`// Font Style`}
                          <br />
                          <br />
                          {`//XML`}
                          <br />
                          {` android:textStyle="bold" `}
                          {` android:textStyle="italic" `}
                          {` android:textStyle="normal" `}
                          <br />
                          <br />
                          {`//JAVA `}
                          <br />
                          {` tv.setTypeface(Typeface.DEFAULT_BOLD);  `}
                          <br />
                        </code>
                      </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="eleven">
                    <h3 className="tab-seaction-heading">
                        Toast in Android Example
                    </h3>
                    <p>
                        <b>Toast</b> in android is used to display a message on screen for a small period of time. <b>Toast</b> fades automatically after small time. Toast.LENGTH_SHORT and Toast.LENGTH_LONG are two constants to specify duration of <b>Toast</b>.
                    </p>
                    <p class="code-commend"><span>// Syntax to display Toast</span>  Desktop/ <br />{`Toast.makeText(context, "message", duration).show(); `} </p>
                    <p><b>context</b> – This is our application context.</p>
                    <p>
                    <b>message</b> – Type a message here to display on screen.
                    </p>
                    <p>
                    <b>duration</b> – Time of toast to simply on screen.
                    </p>
                    <p>
                    <b>show()</b> – This method is used to display the toast.
                    </p>
                    <p class="code-commend">// Example 
                    <br />
                    {`Toast.makeText(MainActivity.this,"Toast Example message",Toast.LENGTH_LONG).show(); `} </p>
                    <div className="code-section">
                      <code>
                        {` // Example }`}
                        <br />
                        <br />
                        {` Toast.makeText(MainActivity.this,"Toast Example message",Toast.LENGTH_LONG).show(); `}
                        <br />
                      </code>
                    </div>
                    <div className="code-section">
                        <code>
                          {` // MainActivity.java }`}
                          <br />
                          <br />
                          {` package com.androidaura.toast; `}
                          <br />
                          <br />
                          {` import android.support.v7.app.AppCompatActivity; `}
                          <br />
                          {` import android.os.Bundle; `}
                          <br />
                          {` import android.widget.Toast; `}
                          <br />
                          <br />
                          {` public class MainActivity extends AppCompatActivity { `}
                          <br />
                          {`setContentView(R.layout.activity_main);`}
                          <br /> 
                          <br /> 
                          &nbsp; &nbsp;{` @Override `} 
                          <br />
                          &nbsp; &nbsp; {` protected void onCreate(Bundle savedInstanceState) { `}
                          <br />
                          &nbsp; &nbsp;&nbsp; { `super.onCreate(savedInstanceState);` }
                          <br />
                          &nbsp; &nbsp;&nbsp; { `setContentView(R.layout.activity_main);` }
                          <br />
                          <br />
                          &nbsp; &nbsp; {` // Toast.makeText(context, text, duration).show(); `}
                          <br />
                          &nbsp; &nbsp; &nbsp;{` Toast.makeText(MainActivity.this, "Toast is Displayed", Toast.LENGTH_SHORT).show(); `}
                          <br />
                          &nbsp;&nbsp;&nbsp;{ `}` }
                          <br />
                          { `}` }
                        </code>
                      </div>
                    <p class="blog-img">
                      <img src="asstes/image/toast.png" style={{ width: "auto" }} />
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="twelve">
                  <div className="tab-content-inner">
                      <h3 className="tab-seaction-heading">
                      AlertDialog in android
                      </h3>
                      <div class="tab-Table-content">
                        <h6 class="tab-Table-content-heading">
                          Table of Content
                        </h6>
                        <ul>
                          <li><a href="">Few Methods names and Description</a></li>
                          <li><a href="">Example of Alert Dialog box in android</a></li>
                          <li><a href="">Custom AlertDialog</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="tab-emergence">
                    <p>
                    In this example will see how to display an <a href="">Alert Dialog box in Android</a> using Android Studio.
                    </p>
                    <p>
                      <b>Alert Dialog box</b> is a small window which pops out on a screen to display particular events. This helps to draw users attention before moving further in the application. Alert dialog also comes with pre defined components. It usually have two buttons one is positive (OK) and another one is Negative  (Cancel) button. You can also define different actions on buttons clicks.
                    </p>
                    <p>
                    In this tutorial we will be creating two different <a href="">Alert Dialog boxes</a>. We need to create an object of AlertDialog Builder, which is inner class of AlertDialog to display the dialog box.
                    </p>
                      <h3 className="tab-seaction-heading subminheading">
                        Few Methods names and Description
                      </h3>
                      <p className="table-heading">
                        <b>AlertDialog.Builder builder = new AlertDialog.Builder(this); </b>
                      </p>
                      <Table striped bordered hover>
                        <tbody>
                          <tr>
                            <td>This method used to set icon to Alert Dialog.	</td>
                            <td>setIcon(Drawable icon) – builder.setIcon(R.drawable.icon);</td>
                          </tr>
                          <tr>
                            <td>This method is used to display content on dialog window</td>
                            <td>setMessage(CharSequence message) – builder.setMessage(“Select you gender”);</td>
                          </tr>
                          <tr>
                            <td>This method is used to set title to your dialog window</td>
                            <td>setTitle(CharSequence title) – builder.setTitle(“Android Aura”);</td>
                          </tr>
                          <tr>
                            <td>This method is used to set if dialog box should cancel or not if user clicks outside the window</td>
                            <td>setCancelable(boolean cancelable) – builder.setCancelable(false);</td>
                          </tr>
                          <tr>
                            <td>This method will dismiss the dialog window</td>
                            <td>
                            dismiss();
                            </td>
                          </tr>
                          <tr>
                            <td>This method will hide the dialog box</td>
                            <td>
                            hide();
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                      <p>
                      In the given example below we will use one button. We will call method to display alert dialog box. Dialog box will open with message “Hello this is AlertDialog – Press OK to close”. Once you click on  “OK” button than dialog box will dismiss. Here we use dialog.cancel() method to dismiss the dialog window.
                      </p>
                      <h5 className="tab-seaction-heading subminheading">
                      Example of Alert Dialog box in android
                      </h5>
                      <div className="code-section">
                        <code>
                          {` // MainActivity.java `}
                          <br />
                          <br />
                          {` package com.androidaura.alertdialog; `}
                          <br />
                          <br />
                          {`import androidx.appcompat.app.AlertDialog;`}
                          <br />
                          {` import androidx.appcompat.app.AppCompatActivity; `}
                          <br />
                          {` import android.content.DialogInterface; `}
                          <br />
                          {` import android.os.Bundle; `}
                          <br />
                          <br />
                          {` public class MainActivity extends AppCompatActivity { `}
                          <br />
                          &nbsp; &nbsp; &nbsp;{`@Override`}
                          <br />
                          &nbsp; &nbsp; &nbsp;{`protected void onCreate(Bundle savedInstanceState) { `}
                          <br />
                          &nbsp; &nbsp;&nbsp;{` super.onCreate(savedInstanceState); `}
                          <br />
                          &nbsp; &nbsp;&nbsp;{` setContentView(R.layout.activity_main); `}
                          <br />
                          <br />
                          &nbsp; &nbsp;&nbsp;{` displayalert(); `}
                          <br />
                          {`}`}
                          <br />
                          <br />
                          {`public void displayAlert() {`}
                          <br />
                          <br />
                          &nbsp; &nbsp;&nbsp;{` new AlertDialog.Builder(MainActivity.this) `}
                          <br />
                          &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;{` .setTitle("Title") `}
                          <br />
                          &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;{` .setMessage("Hello this is AlertDialog - Press OK to close") `}
                          <br />
                          &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;{` .setPositiveButton("OK", new DialogInterface.OnClickListener() { `}
                          <br />
                          &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`public void onClick(DialogInterface dialog, int id) { `}
                          <br />
                          &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`dialog.cancel(); `}
                          <br />
                          &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`} `}
                          <br />
                          &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;{` }).show(); `}
                          <br  />
                          &nbsp; &nbsp;{` } `}
                          <br />
                          {` } `}
                        </code>
                      </div>
                      <p class="blog-img" >
                        <img src="asstes/image/alertdialog-1.png" style={{ width:"auto"}} />
                      </p>
                      <a href="">Toast.</a>
                      <p>
                        In the second example we will ask user to select their gender. Here we will use two buttons Positive and Negative. Once user clicks on Positive button than “Male” selected Toast occurs and if users clicks on Negative button than “Female” selected message will
                      </p>
                      <div className="code-section">
                        <code>
                          {`public void displayalert() {`}
                          <br />
                          &nbsp; &nbsp;&nbsp;{` new AlertDialog.Builder(MainActivity.this) `}
                          <br />
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{` .setTitle("Title") `}
                          <br />
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{` .setMessage("Gender ?") `}
                          <br />
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{` //.setIcon(R.drawable.image) `}
                          <br />
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;{` .setPositiveButton("Male", `}
                          <br />
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;{` new DialogInterface.OnClickListener() { `}
                          <br />
                          <br />
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;{` public void onClick(DialogInterface dialog, int id) { `}
                          <br />
                          &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{` Toast.makeText(MainActivity.this,"Male Selected",Toast.LENGTH_SHORT).show(); `}
                          <br />
                          &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{` dialog.cancel(); `}
                          <br />
                          &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{` } `}
                          <br />
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;{` }) `}
                          <br />
                          {`.setNegativeButton("Female", new DialogInterface.OnClickListener() {`}
                          <br />
                          <br />
                          &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;{` public void onClick(DialogInterface dialog, int id) { `}
                          <br />
                          &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;{` Toast.makeText(MainActivity.this,"Female Selected",Toast.LENGTH_SHORT).show(); `}
                          <br />
                          &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;{` dialog.cancel(); `}
                          <br />
                          &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;{` } `}
                          <br />
                          &nbsp; &nbsp; &nbsp;{`}).show(); `}
                          <br />
                          {` } `}
                        </code>
                      </div>
                      <p>
                        <b>Output</b>
                      </p>
                      <div className="centered-images">
                        <p class="blog-img" >
                          <img src="asstes/image/alertdialog-2.png" style={{ width:"auto"}} />
                        </p>
                      </div>
                      <p>
                        <h5 className="tab-seaction-heading subminheading">
                        Custom AlertDialog in android
                        </h5>
                      </p>
                      <p>
                        In this example we will show how to use Custom Alert Dialog box. We are using EditText and Button inside Alert Box. Once user input the text and clicks on button, Toast message will be displayed.
                      </p>
                      <div className="code-section">
                        <code>
                          {`// MainActivity.java`}
                          <br />
                          <br />
                          {` package com.androidaura.customalert; `}
                          <br />
                          <br />
                          {` import android.app.AlertDialog; `}
                          <br />
                          {` import android.os.Bundle; `}
                          <br />
                          {` import android.view.View; `}
                          <br />
                          {` import android.widget.Button; `}
                          <br />
                          {` import android.widget.EditText; `}
                          <br />
                          {` import android.widget.Toast; `}
                          <br />
                          <br />
                          {` import androidx.appcompat.app.AppCompatActivity; `}
                          <br />
                          <br />
                          {` public class MainActivity extends AppCompatActivity { `}
                          <br />
                          <br />
                          &nbsp; &nbsp;{` Button btn; `}
                          <br />
                          &nbsp; &nbsp;{` @Override `}
                          <br />
                          &nbsp; &nbsp;{` protected void onCreate(Bundle savedInstanceState) { `}
                          <br />
                          &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;{` super.onCreate(savedInstanceState); `}
                          <br />
                          <br />
                          &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;{` btn = findViewById(R.id.btn); `}
                          <br />
                          <br />
                          &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;{` btn.setOnClickListener(new View.OnClickListener() { `}
                          <br />
                          &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;{` @Override `}
                          <br />
                          &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;{` public void onClick(View v) { `}
                          <br />
                          <br />
                          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;{` showAlertDialog(); `}
                          <br />
                          &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;{` } `}
                          <br />
                          &nbsp; &nbsp; &nbsp;{`}); `}
                          <br />
                          {` } `}
                        </code>
                      </div>
                      <p>
                        <b>Output</b>
                      </p>
                      <div className="centered-images">
                      <p class="blog-img" >
                        <img src="asstes/image/custom-alertdialog-1.png" style={{ width:"auto"}} />
                      </p>
                      <p class="blog-img" >
                        <img src="asstes/image/custom-alertdialog-2.png" style={{ width:"auto"}} />
                      </p>
                      <p class="blog-img" >
                        <img src="asstes/image/custom-alertdialog-3.png" style={{ width:"auto"}} />
                      </p>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="thirteen">
                    <div className="tab-content-inner">
                      <h3 class="tab-seaction-heading">AlertDialog in android</h3>
                    </div>
                    <div className="tab-emergence">
                      <p>
                      In Android development, even the smallest UI (User Interface) elements are as important as the big ones. Sometimes, you can ruin the user experience of your app just because of a mere button. This article is focused on one such UI element, i.e. Toggle. Many app developers usually evaluate the context and ensure the consistency of Toggle implementation whenever they are reviewing the app. This is important because a Toggle Button in Android has a great impact on user experience.
                      </p>
                      <p>
                      Although the Toggle Button is an extremely uncomplicated UI element, it shares similarities with a few other Android tools, which makes dealing with it a bit challenging for app developers. For that reason, we have prepared this article to explain the Toggle Button clearly and show how to implement it in your Android app.
                      </p>
                      <h3 class="tab-seaction-heading subminheading">Toggle Button in Android</h3>
                      <p>
                      In the field of computers, the word “Toggle” literally means to change a state from one to another by pressing the same key. Following that definition, a Toggle Button is nothing but a simple button in Android that changes states. Basically, a Toggle Button is just an on and off button that has a light indicator, which shows the current state of the Toggle Button.
                      </p>
                      <p>
                      Like many other Android buttons, a Toggle Button also has two states: on (checked) and off (unchecked). The terms on and off are set as a default, but it can be changed to checked and unchecked.
                      </p>
                      <h3 class="tab-seaction-heading subminheading">Toggle Button Applications</h3>
                      <p>
                      We know this sounds very familiar to you. This is because Android app developers have made use of this simple button in tons of important places that we visit almost every day. Android app developers apply a Toggle Button in order to enable users to change preferences, settings and many other types of information.
                      </p>
                      <p>
                      Another important part of applying a Toggle Button for app developers is that a Toggle Button should provide direct labels, use a standard visual design and deliver immediate results. Also, it is of utmost importance for app developers to remember that a Toggle Button should be used to allow a user to select one out of two opposing options or states.
                      </p>
                      <h3 class="tab-seaction-heading subminheading">Toggle Button Examples</h3>
                      <p>
                      As the Toggle Button is used for a very basic purpose, Android app developers have to use it again and again. So this widely used UI element is difficult to miss. In fact, you can even find a Toggle Button without opening any Android application.
                      </p>
                      <p>
                      For this, you can simply go to the settings of your Android device and find the on/off button of sound, Bluetooth, WiFi, hotspot and many more.
                      </p>
                      <h3 class="tab-seaction-heading subminheading">Comparison of Toggle Button and Switch</h3>
                      <p>
                      Switch is very much like the Toggle Button as it also has two states (on and off). Additionally, just like the Toggle Button, it also shows whether the state is on or off. From these, an app developer chooses one to set as the initial state, and the user can change it. The similarities lead the two buttons, Switch and Toggle Button, to become the subclasses of CompoundButton.
                      </p>
                      <p>
                      The Toggle Button has been here since the very beginning of Android OS (Operating System), i.e. API 1 (also known as Android 1.0). However, Android introduced a new button called Switch with its API 14 or Android 4.0. The Toggle Button is added to the application layout by using the ToggleButton object. On the other hand, the Switch is added to the application layout by using the Switch object. However, the primary difference between the two buttons is their look; the Toggle Button looks like a typical button, whereas the Switch provides the user a slider control.
                      </p>
                      <p>
                      An Android app developer can choose to use either UI element for the same function, but many users believe that a Switch gives a clearer indication of the current state of the button.
                      </p>
                      <h3 class="tab-seaction-heading subminheading">Toggle Button vs Check Box</h3>
                      <p>
                      Apart from their looks, there are not many major differences between a Check Box and a Toggle Button. For this reason, many app developers use Toggle Buttons in place of Check Boxes. That’s a mistake.
                      </p>
                      <p>
                      While doing this, app developers forget that Toggle Buttons give immediate results, and users expect that from them. An immediate effect should not require a Submit button, which is commonly used by Check Boxes. This is why using a Toggle Button instead a Check Box creates confusions in users, which is not affordable for app developers at all as it affects the overall user experience.
                      </p>
                      <p>
                      A Toggle Button or Switch must only be used for operations that need to take effect instantaneously, such as settings in a device. In contrast, if a button needs to be pressed before an operation can take effect (such as in long forms), Check Boxes are used.
                      </p>
                      <h3 class="tab-seaction-heading subminheading">Toggle Button in Android Steps</h3>
                      <p>
                      To create a Toggle Button in your Android application, you must use the Android Studio IDE (Integrated Development Environment). So, first of all, open Android Studio and create a project. While doing so, you will need to enter your project name and package name, like we did. We named our project “Toggle.” As for our package name, we used “com.androidaura.toggle” as the name.
                      </p>
                      <p>
                      When you are done with creating a project, open your MainActivity.java class file in order to enter the
                      </p>
                      <p>following code:</p>
                      <p>CODE</p>
                      <p>
                      Using the above-mentioned code, we have created a basic template of our project, placing the desired UI elements. So, of course, we have placed a Toggle Button in our project by using this code. Apart from that, we have also added a Toast message in our project that will appear after the user has interacted with Toggle Button. This Toast message is programmed to read, “Button is” followed by the current state name of the Toggle Button. After coding in your java class file, open the second file of your project, i.e. activity_main.xml, in order to add the following code in it:
                      </p>
                      <p>CODE</p>
                      <p>
                      With the help of this code, we have designed all our UI elements. First off, we have set the default of our Toggle Button as the “checked” state. Then, we have named the checked state “ON” and the unchecked state “OFF.” These names will appear after “Button is” in the Toast message. After entering all the codes in their respective files, your project will be good to go. Therefore, you will have to launch your project after that. Launching your project will show you the following output:
                      </p>
                      <p>
                          <b>Output</b>
                      </p>
                      <div className="centered-images">
                        <p>
                        <img src="asstes/image/toggle.png" style= {{width: "auto"}} />
                        </p>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourteen">
                    <div className="tab-content-inner">
                      <h3 class="tab-seaction-heading">Spinner in Android Example</h3>
                    </div>
                    <div className="tab-emergence">
                        <p>
                        A <b>Spinner</b> is one of the most commonly used tools in Android development. Because it has a name with a misleading nature, beginners are often wrong when they are asked about a <b>spinner</b>. After hearing the word “Spinner,” a layman would picture a spinning wheel (similar to the one we see when a video is buffering on YouTube) in his mind. However, an Android <b>Spinner</b> is very much different from that in terms of appearance and function both.
                        </p>
                        <p>
                        Now that you know how confusing this topic can be, especially for newcomers, it will be easier for you to understand how important learning about <b>Spinner</b> in Android is. Moreover, you will not face any difficulty while learning how to create a <b>Spinner</b> in Android from scratch.
                        </p>
                        <h5 class="tab-seaction-heading subminheading">Spinner in Android</h5>
                        <p>
                        In Android development, a <b>spinner</b> control allows a user to choose one from a set of items quickly and easily. It has proved to be a very handy UI (user interface) element for this reason, which is why we see it so often in Android applications these days. An Android <b>Spinner</b> fulfils its purpose of giving choices with the help of a drop down list.
                        </p>
                        <p>
                          In its default state, an Android <b>Spinner</b> shows a pre-selected default item. Clicking on the <b>Spinner</b> displays a drop down menu that shows all the available items to the user, from which he can select only one. An Android <b>Spinner</b> is particularly useful for Android developers when they have a lot of entries available but want the users to be able to select only one of them.
                        </p>
                        <h5 class="tab-seaction-heading subminheading">Examples of Spinner in Android</h5>
                        <p>
                        For those who still cannot visualize an Android <b>Spinner</b> in their minds, a few examples may help. A good example of a Spinner can be seen on the Gmail application. The Gmail app shows us a drop down menu to select only one out of a few options, such as reply and forward.
                        </p>
                        <p>
                        We also see an Android Spinner in many apps when we are making a new account. If the application wants the user to enter his country name, it uses a drop down menu that has all country names, out of which the user can select only one. Sometimes, this Spinner even shows a pre-selected default country name before the user starts interacting with this UI element.
                        </p>
                        <p>
                        In the same situation, an app also asks the user to enter his date of birth using a <b>Spinner</b>. In the same manner as before, this <b>Spinner</b> also shows a pre-selected default date of birth. The user, then, changes this date by using the drop down menus provided by the <b>Spinner</b>.
                        </p>
                        <h5 class="tab-seaction-heading subminheading">Spinner vs Progress Indicator</h5>
                        <p>
                        You must be wondering what that spinning thing is called. Although an appropriate name for that UI element should be <b>Spinner</b>, it is actually called a Progress Indicator. As the name suggests, a Progress Indicator shows progress. If you look up Progress Indicators, you’ll see that it has two types: determinate and indeterminate.
                        </p>
                        <p>
                        Determinate Progress Indicators are used when the progress time is known, so they show the progress and the time required to complete it. Indeterminate Progress Indicators are used when the waiting time is unknown, so they usually show an animation moving in circular motion until the progress finishes.
                        </p>
                        <p>
                        Your confusion is valid, and we respect it. Beginners will be happy know to that the word <b>Spinner</b> is not commonly used, even in material guidelines. Instead, only detailed usage of “drop-down” is seen. For some reason, the older graphical interface elements used the name “Spinner” for showing a vertical list of choices. So Android adopted the same term for this purpose; however, “drop-down” has become a more popular term than “Spinner” with time.
                        </p>
                        <h5 class="tab-seaction-heading subminheading">Spinner in Android Steps</h5>
                        <p>
                        Now that everything has been clarified, it is time for you to learn how a <b>Spinner</b> is used to create a drop down menu in Android.
                        </p>
                        <p>
                        First, open Android Studio, and create a new project as shown in our earlier tutorials. Name your project “Spinner.” Select a suitable package name for your project. We have used “com.androidaura.spinner” as our package name.
                        </p>
                        <p>
                        Now, open your MainActivity.java file to add the following code in it:
                        </p>
                        <p>CODE</p>
                        <p>
                        With this file, an Android developer is able to write his java code and define what his application would do. This special java class, known as Activity, will determine which layout is to be used in a given situation. In simpler words, if a layout is designed to have a button, a code in the activity would define what function the button will perform when it is clicked. Therefore, it is highly important to have this file and code. In our activity file, we have added our java code to display color names, such as blue, red and green, when the user taps on the <b>Spinner</b>.
                        </p>
                        <p>
                        After adding the code in your class file, open your activity_main.xml layout file to enter the following code in it:
                        </p>
                        <p>CODE</p>
                        <p>
                        With this file, a developer is able to control the appearance of his application. Coding in this file allows him to add different UI elements in his project. The code above shows that we have used a couple of widgets so that our project can have some specific features, such as vertical orientation, centralized text, width & height of <b>spinner</b> and so on. First of all, we have used the LinearLayout widget in order to arrange the layout of our project as per our requirements. This widget is used with a vertical orientation so that all the contents of our project are arranged in a vertical order. Other than that, we have used the <b>Spinner</b> widget in order to obtain a drop down menu. Along with this widget, we have set the <b>spinner</b> characteristics, such as its 50 dp height and 100 dp width.
                        </p>
                        <p>
                        After adding both the codes in their respective files, you will be ready to obtain your result. The above mentioned codes will give you an output that looks like this:
                        </p>
                        <b>Output</b>
                        <p className="blog-img">
                          <img src="asstes/image/spinner-1.png" style={{width: "auto"}} />
                        </p>
                        <p className="blog-img">
                         <img src="asstes/image/spinner-2.png" style={{width: "auto"}} />
                        </p>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifteen">
                  <div className="tab-content-inner">
                      <h3 class="tab-seaction-heading">Android SeekBar Example</h3>
                    </div>
                    <div className="tab-emergence">
                        <p>
                        If you are a beginner looking for knowledge about <b>Seek Bar</b> in Android, you have come to the right place. We have compiled all the necessary information one must have about <b>Seek Bar</b> in Android, ranging from the Android SeekBar basics to actually creating your own SeekBar in Android from zero. To begin with, you must proper understand what a <b>Seek Bar</b> in Android actually means.
                        </p>
                        <h5 class="tab-seaction-heading subminheading">Seek Bar in Android</h5>
                        <p>
                        The most important part of understanding Android <b>Seek Bar</b> is ProgressBar. If you are familiar with Android ProgressBar, you can easily understand Android <b>Seek Bar</b> and even visualize it right now. This is because the two are quite similar. That being said, it is very easy for a layman to mix the two up, so you have to be careful while learning about each of them
                        </p>
                        <p>
                        A <b>Seek Bar</b>, in Android, is an extension of ProgressBar. What makes the two different is the fact that a <b>Seek Bar</b> adds a thumb that a user can drag by putting his finger on it and moving the finger. A SeekBar in Android can be of many types, such as a horizontal SeekBar, vertical SeekBar, custom SeekBar and many more. However, the horizontal SeekBar is the most common and the default style of SeekBar in Android. Also, this is the style that we will show you how to create in this tutorial. A developer must know what kind of SeekBar style suits his purpose and choose accordingly.
                        </p>
                        <p>
                        Having a SeekBar in an Android user interface is extremely important. This is because a SeekBar enables a user to select from a number of integer values so that he can choose a value between minimum and maximum to set it as the current progress level. If you still have not been able to picture what a SeekBar in Android looks like, a few examples of SeekBar are the brightness control, volume control and flashlight intensity control bars of your device.
                        </p>
                        <h5 class="tab-seaction-heading subminheading">SeekBar vs ProgressBar</h5>
                        <p>
                        As we have mentioned before, people (especially beginners) often get confused between a SeekBar and a ProgressBar due to their similar appearances; however, the two are quite unalike in terms of function and purpose. The main difference between SeekBar and ProgressBar is, as mentioned above, that a user can determine the progress by moving a thumb or slider in SeekBar, whereas ProgressBar only shows the progress and cannot be interacted with. Also, while adding SeekBar through your code in the layout file, you type in the SeekBar element.
                        </p>
                        <p>
                        It is not possible for one to create a proper Android SeekBar (one that we see in our apps daily) without knowing the essentials of the codes that is used to develop the seek bar. Before creating an Android SeekBar with many features, you must learn the following important components of the codes and understand the purpose of each component.
                        </p>
                        <p>
                        Open your “MainActivity.java” file, and type in the following code:
                        </p>
                        <p>CODE</p>
                        <p>
                        By carefully reading this code, you will realize how important it is for our project. Since it is the first screen to appear in our project, it will not be wrong to say that this code basically runs or launches our project. No other additional activities can be performed without this code.
                        </p>
                        <p>Now, open your “activity_main.xml” layout file for UI designing, and type in the following code:</p>
                        <p>
                          CODE
                        </p>
                        <p>
                        If you read this code carefully, you will see that we have used a few widgets and added a few additional features to our project, such as centralized text, a maximum value of 100, text size of 25 sp and so on. First, we have used the “LinearLayout” widget with a vertical orientation. This means that all the contents of our project will be arranged vertically. In addition to that, we have used the “TextView” widget that will display all the text to the user of our project. Other than that, we have used the most important widget of our project and that is the “SeekBar” widget, which will add a seek bar to our project.
                        </p>
                        <p>
                        When you are done with adding the codes in both the files, you will get your output. The codes mentioned above will give you the following SeekBar:
                        </p>
                        <b>Output</b>
                        <p className="blog-img">
                          <img src="asstes/image/seekbar.png" style={{width: "auto"}} />
                        </p>
                        <p>
                        With all this necessary knowledge about the Android SeekBar, we hope you can create your own SeekBar in Android now. If you want to get better at developing a SeekBar in Android from scratch, we advise you to practice and experiment by trying different attributes and methods. The output will give you an idea of your progress.
                        </p>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="sixteen">
                    <div className="tab-content-inner">
                      <h3 class="tab-seaction-heading">Rating Bar in Android</h3>
                    </div>
                    <div className="tab-emergence">
                    <p>
                    Ever since the boom of the internet, there has been a massive increase in products on it. With the conveniences that internet has provided to the world, everyone wants to promote their products through it to reach a wider audience without spending too much. For this reason, marketing has become a huge part of the internet. As a matter of fact, it is very rare these days to see a page on the internet that does not have an advertisement.
                    </p>
                    <p>
                    Of course, everyone wants to highlight only the good side of their products even if the product is overflowing with flaws. In fact, there are more faulty products on the internet than high quality ones. In such a situation, a rating system becomes a necessity. With a proper rating system, a potential consumer can easily distinguish between a good product and a bad product.
                    </p>
                    <p>
                    In Android, the Rating Bar tool is used to achieve this purpose. To educate our readers, this article will be a comprehensive guide of Rating Bar, starting from the basics to creating a Rating Bar from scratch.
                    </p>
                    <h5 class="tab-seaction-heading subminheading">Rating Bar in Android</h5>
                    <p>
                    In order to enable people on the internet to rate a product, Android introduced a brilliant graphic solution in the shape of its Rating Bar option. By nature, a Rating Bar is an extension of Progress Bar and Seek Bar. A Rating Bar shows a rating with the help of stars. A Rating Bar in its default state allows a user to touch, drag or use arrow keys to enter their rating. A floating point number is returned whenever a value of rating is entered. This number may be like 1.0, 3.5, 4.5 and so on.
                    </p>
                    <h5 class="tab-seaction-heading subminheading">Examples of Rating Bar in Android</h5>
                    <p>
                    Because it has numerous applications, the Rating Bar has become one of the most widely used tools in Android applications.
                    </p>
                    <p>
                    An example of a Rating Bar is always present in your Android devices. This popular Rating Bar can be found inside Google Play Store. When you open Google Play Store and tap on any app present on its main activity, a new page opens.
                    </p>
                    <p>
                    This page shows you details about the app you selected, such as user reviews, number of downloads, an “about” section, etc. It also shows a big-sized floating point number standing above 5 stars, showing the current average rating of the app. If you have this app already downloaded in your device, you would see a Rating Bar asking you to “rate this app.”
                    </p>
                    <p>
                    Apart from online shopping apps where Rating Bars are easily found, you can also see a Rating Bar in food delivery marketplace apps, such as foodpanda. Here, a Rating Bar is used to rate services of a restaurant. Usually, in these Android apps, Rating Bars for restaurants are placed on their respective pages.
                    </p>
                    <h3 class="tab-seaction-subheading">Steps</h3>    
                      <p>
                      Now that all the important points regarding Rating Bar in Android are covered, we will show you how to develop it for an Android app.
                      </p>
                      <p>
                      First off, you need to open the Android Studio IDE (Integrated development Environment), which is a platform that Android has provided for app development.
                      </p>
                      <p>
                      After launching Android Studio, create a new project as shown in our initial tutorials. Then, give an appropriate name to your project. For example, our project name is “Rating Bar.” Similarly, choose a name for your package as well. We have chosen “com.androidaura.ratingbar” as our package name.
                      </p>
                      <p>
                      Now, open the MainActivity.java class file in order to enter the following code:
                      </p>
                      <p>CODE</p>
                      <p>When you are done coding in your MainActivity.java class file, open the second file of your project, i.e. activity_main.xml layout file. After opening this file, add the following code in it:</p>
                      <p>
                        CODE
                      </p>
                      <p>
                      After successfully entering both the above-mentioned codes in their respective files, you will be ready to launch your project and view the output. By using the codes we have shown, your output would look like the following illustration:
                      </p>
                      <p>
                        <b>Output</b>
                      </p>
                      <p className="blog-img">
                          <img src="asstes/image/ratingbar.png" style={{width:"auto"}} />
                      </p>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="sixteen">
                  <div className="tab-content-inner">
                      <h3 class="tab-seaction-heading">Radio Button in Android</h3>
                    </div>
                    <div className="tab-emergence">
                    <p>
                    In Android development, an app developer is lucky as he doesn’t have to worry when he wants to display multiple options to a user. This is because Android provides many tools this purpose. One such tool is the Radio Button.
                    </p>
                    <p>
                    Even though it is a blessing to have a number of solutions for this problem, it is known to create a lot of confusion for Android developers, especially the ones who are new to the field. For this reason, this article will start from the basics and eliminate all you’re confusions before showing you how to create a Radio Button for an application in Android.
                    </p>
                      <h5 class="tab-seaction-heading subminheading">Radio Button in Android</h5>
                      <p>
                      As mentioned earlier, a Radio Button in Android is used when a few options are there for a user to choose from. The Android Radio Button widget allows the user to select only one of the given choices at a time.
                      </p>
                      <p>
                      Basically, there are two states of a Radio Button—checked and unchecked. When a user clicks on an unchecked Radio Button, it obtains the checked state, making the previously checked Radio Button (if there is any) unchecked.
                      </p>
                      <p>
                      In an Android Radio Button widget, each option refers to a radio button. Also, all the presented options in this tool are collectively referred to as a Radio Group. In fact, there is a separate widget of Radio Group as well, i.e. android.widget.RadioGroup. To clarify it further, Radio Buttons are used inside a Radio Group, and those Radio Buttons are grouped together by android.widget.RadioGroup.
                      </p>
                      <p>
                      The name “Radio Button” tells a lot about the nature of this Android widget. The widget is named after actual buttons of older radios that were used to select present stations. After pressing one of the buttons, all the other buttons would pop out, so the pressed button would be the only option that was chosen by the user.
                      </p>
                      <p>
                      Traditionally, the default state of a set of Radio Buttons would have the first Radio Button already selected. However, websites, apps and forms these days would have no option selected in the default state.
                      </p>
                      <p>
                      A common example of a Radio Button pair is seen when you sign up on an app and it asks your gender by giving you two options (Male and Female) with their Radio Buttons.
                      </p>
                      <h5 class="tab-seaction-heading subminheading">Radio Button vs Spinner vs Check Box</h5>
                      <p>
                      Because the function of a Radio Button, Spinner and Check Box is quite similar, Android app developers mix them up very often. It is also important to use each of them appropriately as it affects the overall user experience.
                      </p>
                      <p>
                      A Check Box is just a small square box. Like Radio Button, it also has the two states, checked and unchecked. In the checked, the box is filled with a check mark. A set of Check Boxes presents a range of options, but—unlike a Radio Button set that makes you choose—any number of options can be selected in the case of Check Boxes. You can find a check box under the Terms and Conditions of an app.
                      </p>
                      <p>
                      On the other hand, a Spinner is basically a drop-down, scrollable list of items. From this list, a user has to choose only one item. The difference here is the number of options. Usually, app developers use a Spinner when the options are more than five. This is done to save space on the page. Whereas, Radio Button sets are used for fewer options because a drop-down list isn’t convenient in this case.
                      </p>
                      <h5 class="tab-seaction-heading subminheading">Radio Button in Android Steps</h5>
                      <p>
                      Because Radio Buttons serve a very important purpose, their implementation should be at an Android app developer’s fingertips. In this tutorial, we will show you how to implement the Radio Button widget to add Radio Buttons in your app.
                      </p>
                      <p>
                      In order to begin coding to implement a Radio Button in Android, open the Android Studio IDE (Integrated Development Environment) first of all. Then, create a new project as shown in our early tutorials.
                      </p>
                      <p>
                      While creating a new project, you must select a name for your project. To give you an idea, we have named our project “Radio.” Also, you must choose an appropriate package name for your project. For instance, “com.androidaura.radio” is the package name for our project.
                      </p>
                      <p>
                      After creating a new project property, open your project’s first file, i.e. the MainActivity.java class file, to add the following code it:
                      </p>
                      <p>CODE</p>
                      <p>
                      After coding in the MainActivity file, open the second file of of your project. This is the strings.xml file where you will code to add some custom strings in your project, such as “Male” and “Female.” Now, enter the following code in the file:
                      </p>
                      <p>
                        CODE
                      </p>
                      <p>
                      Once you’re done with entering all the above-mentioned codes in the right files, you will be able to launch your project. After launching your project, your output would look like the following image:
                      </p>
                      <p>
                        <b>Output</b>
                      </p>
                      <p className="blog-img">
                        <img src="asstes/image/radio.png" style={{width:"auto"}} />
                      </p>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="seventeen">
                      <div className="tab-content-inner">
                      <h3 class="tab-seaction-heading">Radio Button in Android</h3>
                    </div>
                    <div className="tab-emergence">
                        <p>
                        In Android development, an app developer is lucky as he doesn’t have to worry when he wants to display multiple options to a user. This is because Android provides many tools this purpose. One such tool is the Radio Button.
                        </p>
                        <p>
                        Even though it is a blessing to have a number of solutions for this problem, it is known to create a lot of confusion for Android developers, especially the ones who are new to the field. For this reason, this article will start from the basics and eliminate all you’re confusions before showing you how to create a Radio Button for an application in Android.
                        </p>
                        <h5 class="tab-seaction-heading subminheading">Radio Button in Android</h5>
                        <p>
                        As mentioned earlier, a Radio Button in Android is used when a few options are there for a user to choose from. The Android Radio Button widget allows the user to select only one of the given choices at a time.
                        </p>
                        <p>
                        Basically, there are two states of a Radio Button—checked and unchecked. When a user clicks on an unchecked Radio Button, it obtains the checked state, making the previously checked Radio Button (if there is any) unchecked.
                        </p>
                        <p>
                        In an Android Radio Button widget, each option refers to a radio button. Also, all the presented options in this tool are collectively referred to as a Radio Group. In fact, there is a separate widget of Radio Group as well, i.e. android.widget.RadioGroup. To clarify it further, Radio Buttons are used inside a Radio Group, and those Radio Buttons are grouped together by android.widget.RadioGroup.
                        </p>
                        <p>
                        The name “Radio Button” tells a lot about the nature of this Android widget. The widget is named after actual buttons of older radios that were used to select present stations. After pressing one of the buttons, all the other buttons would pop out, so the pressed button would be the only option that was chosen by the user.
                        </p>
                        <p>
                        Traditionally, the default state of a set of Radio Buttons would have the first Radio Button already selected. However, websites, apps and forms these days would have no option selected in the default state.
                        </p>
                        <p>
                        A common example of a Radio Button pair is seen when you sign up on an app and it asks your gender by giving you two options (Male and Female) with their Radio Buttons.
                        </p>
                        <h5 class="tab-seaction-heading subminheading">Radio Button vs Spinner vs Check Box</h5>
                        <p>
                        Because the function of a Radio Button, Spinner and Check Box is quite similar, Android app developers mix them up very often. It is also important to use each of them appropriately as it affects the overall user experience.
                        </p>
                        <p>
                        A Check Box is just a small square box. Like Radio Button, it also has the two states, checked and unchecked. In the checked, the box is filled with a check mark. A set of Check Boxes presents a range of options, but—unlike a Radio Button set that makes you choose—any number of options can be selected in the case of Check Boxes. You can find a check box under the Terms and Conditions of an app.
                        </p>
                        <p>
                        On the other hand, a Spinner is basically a drop-down, scrollable list of items. From this list, a user has to choose only one item. The difference here is the number of options. Usually, app developers use a Spinner when the options are more than five. This is done to save space on the page. Whereas, Radio Button sets are used for fewer options because a drop-down list isn’t convenient in this case.
                        </p>
                        <h5 class="tab-seaction-heading subminheading">Radio Button in Android Steps</h5>
                        <p>
                        Because Radio Buttons serve a very important purpose, their implementation should be at an Android app developer’s fingertips. In this tutorial, we will show you how to implement the Radio Button widget to add Radio Buttons in your app.
                        </p>
                        <p>
                        In order to begin coding to implement a Radio Button in Android, open the Android Studio IDE (Integrated Development Environment) first of all. Then, create a new project as shown in our early tutorials.
                        </p>
                        <p>
                        While creating a new project, you must select a name for your project. To give you an idea, we have named our project “Radio.” Also, you must choose an appropriate package name for your project. For instance, “com.androidaura.radio” is the package name for our project.
                        </p>
                        <p>
                        After creating a new project property, open your project’s first file, i.e. the MainActivity.java class file, to add the following code it:
                        </p>
                        <p>
                          <b>CODE</b>
                        </p>
                        <p>
                        After coding in the MainActivity file, open the second file of of your project. This is the strings.xml file where you will code to add some custom strings in your project, such as “Male” and “Female.” Now, enter the following code in the file:
                        </p>
                        <p>
                          CODE
                        </p>
                        <p>
                          CODE
                        </p>
                        <p>
                        Once you’re done with entering all the above-mentioned codes in the right files, you will be able to launch your project. After launching your project, your output would look like the following image:
                        </p>
                        <p>
                          <b>Output</b>
                        </p>
                        <p className="blog-img">
                        <img src="asstes/image/radio.png" style={{width:"auto"}} />
                      </p>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="eightteen">
                  <div className="tab-content-inner">
                      <h3 class="tab-seaction-heading">Progress Dialog in Android Example</h3>
                    </div>
                    <div className="tab-emergence">
                    <p>
                    Before we show you how to create a <b>Progress Dialog</b> in Android, let us make sure that you understand the basics. This article will cover everything you need to know about dialog in Android, starting from a simple dialog to creating a dialog in Android from scratch.
                    </p>
                    <h5 class="tab-seaction-heading subminheading">Dialog</h5>
                    <p>
                    For those who are new to this field, a dialog is basically just a small box or window that appears in front of a user’s current activity. When this happens, the focus is shifted from the underlying activity to the dialog. The basic purpose of dialogs is to notify the user about something and to perform quick tasks associated with the application. Dialogs are divided into four main types: Alert Dialog, Progress Dialog, Date Picker Dialog and Time Picker Dialog. Our point of focus in this article is Progress Dialog.
                    </p>
                    <h5 className="tab-seaction-heading subminheading">Android Progress Dialog</h5>
                    <p>
                    You must have seen an Android <b>Progress Dialog</b> in the UI of an Android app. It is a dialog box which, as the name suggests, shows the progress of a task. The simplest Android <b>Progress Dialog</b> shows a spinning wheel, also known as progress wheel. It can also have buttons and a progress bar that shows the loading status, but that requires some additional coding. A common example of an Android <b>Progress Dialog</b> is the dialog box you see while you are uploading or downloading a file.
                    </p>
                    <p>
                    If you are still unclear about what an Android <b>Progress Dialog</b> is, the following example of a typical dialog may help you:Open the MainActivity.java file, and add the following code in it:
                    </p>
                    <p>CODE</p>
                    <p>
                    This code basically is the key to run our project as it is, in simpler words, the first screen to appear when our project is launched. Without this, performing other additional activities is not possible.Open your layout file, i.e. activity_main.xml, and enter the following code in it:
                    </p>
                    <p>
                      CODE
                    </p>
                    <p>
                    This codes means that we have used the “ProgressBar” widget (to create a progress bar) and have added other features to it, such as a horizontal style, maximum value of 100, centralized text, minimum height of 50 dp, etc. We have also used the “LinearLayout” widget with a vertical orientation to arrange our contents vertically. Other than that, we have used the “TextView” widget, which will display text to the user, and the “Button” widget to create a button in the Progress Dialog that says “GO.”
                    </p>
                    <p>
                      <b>Output</b>

                    </p>
                    <p className="centered-images">
                        <img src="asstes/image/progressdialog.png" style={{width:"auto"}} />
                      </p>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="ninteen">
                  <div className="tab-content-inner">
                      <h3 class="tab-seaction-heading">Check Box in Android Example</h3>
                    </div>
                    <div className="tab-emergence">
                    <p>
                    The Check Box element has been here for a very long time, so they can be seen in not just Android applications but websites and many other platforms as well. Yes, it is small; some people might not even notice it on a page at first glance, but a Check Box is one of the most important UI (User Interface) elements in Android.
                    </p>
                    <p>
                    Although the versatility of the Check Box is unrivalled in Android development, it is widely mixed up with another UI tool of Android. So beginners, UI designers and even app developers are often led to a number of misconceptions about the Check Box element. Therefore, it is a must for people in this field to study Check Boxes.
                    </p>
                    <p>
                    In this tutorial, not only will we show you how to create a Check Box in Android, but we will also remove and prevent all the confusions regarding the Check Box tool.
                    </p>
                    <h5 class="tab-seaction-heading subminheading">Check Box in Android</h5>
                    <p>
                    In Android, a Check Box is nothing but a small square box. This small box is actually a button, which is toggled every time a user clicks on it. Naturally, the Check Box element has two states: checked and unchecked. These states can also be referred to as on (checked) and off (unchecked). When a user clicks on an unchecked Check Box, the empty Check Box gets filled with a check mark, which is also known as a tick mark. This is the checked state. In the same way, clicking on a checked Check Box removes the check mark in it and sends it to the unchecked state. In its default state, a Check Box is usually set off or “unchecked.” However, it can be marked on or “checked” by setting the attribute android:checked=”true” in the XML layout file.
                    </p>
                    <p>
                    A Check Box is a valuable tool because it serves an important purpose of an Android app developer. In Android development, a developer uses the Check Box widget when he needs to present one option or a group of options, all of which are selectable at a given time and not mutually exclusive. In addition to that, before implementing the Check Box class, one must always remember that the Compound Button class is its parent class. Apart from that, another noteworthy thing about the Check Box class is that every Check Box must register for click listener.
                    </p>

                    <h5 className="tab-seaction-heading subminheading">Check Box vs Radio Button</h5>
                    <p>
                    Even though there are only a few similarities between a Check Box and a Radio Button, people often get confused between the two. The main similarity is that they are both small buttons that allow their users to choose an option. Also, they both have the checked and unchecked states.
                    </p>
                    <p>
                    However, unlike a Check Box, a Radio Button fills up with a dot in its checked state. Other than that, while Check Boxes are independent, Radios Buttons provide mutually exclusive options to select. Because Radio Buttons are not mutually exclusive, they are implemented as a group called a Radio Group. This is why a user has to select one option in the case of Radio Buttons; however, all Check Box options are selectable.
                    </p>
                    <p>
                    For these reasons, a Check Box and a Radio Button are very different from each other and can’t be used interchangeably. An example of Radio Button application can be seen on the sign up page of an app where you are asked to enter your gender. You are given two options: Male and Female, and there is a Radio Button beside each option.
                    </p>
                    <h5 className="tab-seaction-heading subminheading">Check Box Applications and Examples</h5>
                    <p>
                    Due to its important features and versatility, an Android Check Box has numerous applications. The Check Box element can be seen in forms and databases in order to indicate possible options for a question. Also, the Check Box widget is also applied to a collection of settings. Additionally, it may be used to allow a user to make multiple selections in a single list. If not that, it may be used to apply a single Check Box for making single selections.
                    </p>
                    <p>
                    Examples of Check Box application are seen in nearly every Android app. You may see a Check Box where a Boolean True or False statement is present, such as “Is two greater than three? Yes or No.” Another example of Check Box usage is mostly seen in the main activity of social media apps. In these apps, when you launch the application, there is a “Remember me” option accompanied with a Check Box in the Login form.
                    </p>
                    <p>
                    Also, a Check Box is seen under the “Terms and Conditions” portion in an Android app. The Check Box is present beside the option that basically says “I agree.”
                    </p>
                    <p>
                    Repeated usage of Check Boxes can be seen on food delivery apps, such as Uber Eats. Here, Check Box options allow a user to personalize their order. The options with the list of Check Boxes can be regarding extra toppings, special dietary requirements, etc.
                    </p>
                    <p>
                    Every Check Box must register for click listener. CompoundButton is the parent class for the CheckBox class.
                    </p>
                    <p>
                    Check Box is generally used when you want user to select one or more items from the list. Example you ask user their favorite food to select among many. In this case user can select one or many according to his likes. By default Check Box is set “OFF”. You can also marked Check Box “ON” by setting
                    <i>android:checked =”true” in XML layout file.</i>
                    </p>
                    <p>
                    We can also create Check Box in activity file.
                    </p>
                    <p>CODE</p>
                    <h5 className="tab-seaction-heading subminheading">Check Box in Android Steps</h5>
                    <p>
                    In order to create a Check Box for an Android application, the first step for you is to open the Android Studio IDE (Integrated Development Environment). Then, you have to create a project on Android Studio as we have shown in our first tutorials.
                    </p>
                    <p>
                    In below example we ask users to select their favorite color. As you can see from output two colors selected, one is Blue and other one Red. Click on submit button to Toast the selected items.
                    </p>
                    <p>
                    Now, open the MainActivity.java class file of your project in order to enter the following code:
                    </p>
                    <p>CODE</p>
                    <p>
                      CODE
                    </p>
                    <p>
                    Using this code, we have asked a user to select his favourite color. Under this question, we have placed a set of Check Boxes with options that define names of different colors, such as Blue, Green and Yellow. We have also used this code to display a Toast message whenever the user selects his options and presses the “SUBMIT” button. This Toast message will read “Your favourite color : ” followed by the options the user has chosen, such as “Yellow Red.”
                    </p>
                    <p>
                    Once you have completed your coding, launch your project to display your output. If you have correctly entered the above-mentioned codes, you would get the following output:
                    </p>

                    <p>
                      <b>Output</b>
                    </p>
                    <p className="blog-img">
                        <img src="asstes/image/checkbox.png" style={{width:"auto"}} />
                      </p>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="twenty">
                    <div className="tab-content-inner">
                      <h3 className="tab-seaction-heading">ListView in Android Example</h3>
                    </div>
                    <div className="tab-emergence">
                    <p>
                    <b>List View</b> is probably one of the most, if not the most, used tools used in Android development. Therefore, learning about it is highly important for future Android developers. In addition to that, <b>List View</b> in Android is among the most self explanatory tools by Android developers. As a result, beginners usually do not face much difficulty while learning about <b>List View</b> in Android.
                    </p>
                    <p>
                    That being said, a few confusions have known to be arisen in the minds of the newcomers in recent times when it comes to <b>List View</b> in Android. In this article, everything important about Android <b>List View</b> that a beginner needs to know will be addressed, starting from the basics to creating a List View in Android from zero.
                    </p>
                    <h5 className="tab-seaction-heading subminheading">List View in Android</h5>
                    <p>
                    Those who have put even a little thought probably must have guessed by now what Android List View is. For those who are still struggling, an Android <b>List View</b> is used by Android developers to create a vertical list for a group of items or options. Apart from containing a number of items, the list can also be scrolled up and down.
                    </p>
                    <p>
                    The convenience of being able to scroll the list is present in the default state of <b>List View</b>. For this reason, Android app developers do not have to make the list scrollable with the help of other View tools, such as Scroll View.
                    </p>
                    <p>
                    Basically, Android app developers use the <b>List View</b> option when they have more than one item falling in the same category. The simplest and the most common example of List View can be seen on your own phone contacts page. This page consists of your phone contacts arranged in a <b>List View</b>, and selecting one of these contacts displays details about the contact.
                    </p>
                    <h5 className="tab-seaction-heading subminheading">List View vs Recycler View</h5>
                    <p>
                    Being such a fundamental tool, List View is widely used in Android applications. As a matter of fact, it would be an extremely difficult task to find an app that does not make use of <b>List View</b>. That being said, the usage of <b>List View</b> has significantly reduced with the arrival of Recycler View, which was introduced with Android 5.0, i.e. Lollipop. To avoid confusion, Recycler View is nothing but a modernized version of List View. Although Recycler View offers more options and features, it is a bit more complex to use.
                    </p>
                    <h5 className="tab-seaction-heading subminheading">List View vs Recycler View</h5>
                    <p>
                    Being such a fundamental tool, List View is widely used in Android applications. As a matter of fact, it would be an extremely difficult task to find an app that does not make use of <b>List View</b>. That being said, the usage of <b>List View</b> has significantly reduced with the arrival of Recycler View, which was introduced with Android 5.0, i.e. Lollipop. To avoid confusion, Recycler View is nothing but a modernized version of List View. Although Recycler View offers more options and features, it is a bit more complex to use.
                    </p>
                    <h5 className="tab-seaction-heading subminheading">Important Methods for Creating an Android List View</h5>
                    <p>
                    For an Android developer, it is not possible to create a proper and up-to-the-mark Android <b>ListView</b> without knowing the essentials of the code that is used to develop it. Before creating an Android <b>ListView</b> with many features, you must learn the following important attributes and methods and understand the purpose of each.
                    </p>
                    <p>
                    <b>android:divider</b> The android:divider attribute is a color or drawable that is used to draw between items of a list.
                    </p>
                    <p>
                    <b>android:dividerHeight</b> The android:dividerHeight is used to set a specific height for the divider. This height can be in dp, sp, in, mm or px.
                    </p>
                    <p>
                    <b>getAdapter( )</b> The getAdapter( ) method is used to return the adapter that is currently in use in the ListView.
                    </p>
                    <p>
                    <b>addHeaderView( )</b> The addHeaderView( ) method is used to add a fixed header view at the top of the list.
                    </p>
                    <p>
                    <b>getDivider( )</b> The getDivider( ) method is used to return the drawable that is to be drawn between each item of the list.
                    </p>
                    <p>
                    <b>getDividerHeight( )</b> The getDividerHeight( ) is used to return divider height that is to be drawn between each item of the list.
                    </p>
                    <p>
                    <b>isOpaque( )</b> The isOpaque( ) method shows if the list View is opaque or not.
                    </p>
                    <p>
                      <b>removeFooterView( View view)</b> The removeFooterView( View view) method is used to remove previously added footer view from the list.
                    </p>
                    <p>
                    <b>removeHeaderView( View view)</b> The removeHeaderView( View view) method is used to remove previously added header view from the list.
                    </p>
                    <h5 className="tab-seaction-heading subminheading">Adapter and Different Types of Adapter</h5>
                    <p>
                    An adapter is a pathway between user interface (UI) element and data source. In <b>ListView</b>, Adapter classes are used to add the required data in the list. An Adapter pulls the data from a data source, such as array and database, and transfers the data to the list itself.
                    </p>
                    <p>
                    Basically, an Adapter sends the list data to AdapterView, from which View takes the data and shows it on different views, such as <b>List View</b>, Spinner and Grid View. In actuality, AdapterView has many subclasses, and one of those is ListView. A ListView can be filled if it is bound to an Adapter, which collects data from a foreign data source and develops a View that displays all the data.
                    </p>
                    <h5 className="tab-seaction-heading subminheading">In Android, there are four main types of Adapter</h5>
                    <p>
                    <b>ArrayAdapter:</b> It is used when our data source is an array or list. For example, a list of names, countries, contacts, etc. As a default, ArrayAdapter develops a separate view for each item of the list and places them in a single TextView. It is noteworthy that you can store your list items on the strings.xml file as well.
                    </p>
                    <p>
                    <b>CursorAdaptor:</b> It is used when the source of data is a cursor.
                    </p>
                    <p>
                    <b>SimpleAdapter:</b> It is mainly used to accept a static data that is defined in resources, such as database or array.
                    </p>
                    <p>
                    <b>BaseAdapter:</b> It is the parent adapter of the rest of the types of adapter. Being a generic implementation for all the above-mentioned adapter types, BaseAdapter is used in the views according to our requirements.
                    </p>
                    <h5 className="tab-seaction-heading subminheading">ListView in Android Steps</h5>
                    <p>
                    Now that you have learned all the basics of ListView, let us show you how to create a ListView from scratch.
                    </p>
                    <p>
                    First of all, open Android Studio IDE (Integrated development Environment) to create a new project just like how we showed you in our earlier tutorials. We have named our project “Listview,” but you may choose your own if you want. In the same way, we have set “com.androidaura.listview” as the Package Name of our project; however, you can select a suitable Package Name for your project yourself.
                    </p>
                    <p>
                    After this, open your MainActivity.java class file so that you can add the following code in it:
                    </p>
                    <p>
                      CODE
                    </p>
                    <p>
                    Before moving further, let us be clear about what this code means and what it does. The abovementioned code determines what data our ListView will display, what format it will use to do so and so on. In order to achieve that, we need to use a set of data and a View, into which the Adapter will convert the data. Therefore, as you can see in the file above, we have chosen a specific dataset (planet names) to be used in the project and added it in this file.
                    </p>
                    <p>
                    When you are done coding in your java class, you have to open your activity_main.xml layout file in order to add the following code in it:
                    </p>
                    <p>CODE</p>
                    <p>
                    In the code mentioned above, it is clear that we have defined the characteristics of our ListView, such as its width and height. Other than that, we have chosen a LinearLayout for our project with a vertical orientation and fixed a specific height and width for it. However, all this would be useless without our code in MainActivity.java class file, which contains the most important instructions. Now, create a new XML layout file, name it “activity_list.xml” and add the following code in it to fulfill the remaining requirements:
                    </p>
                    <p>CODE</p>
                    <p>
                    Because the set of data in our List View is just plain text, we would only need a regular TextView widget to display it in our ListView. Let us suppose, if our ListView data had images along with some text, then we would need to use an ImageView widget partnered with a TextView widget to display both the text and the images in the ListView.
                    </p>
                    <p>
                    Since we have used a TextView widget, we needed to define the characteristics of the text as well. Hence, we have used this code to set different parameters of the text, such as text size, etc.
                    </p>
                    <p>
                    When you have successfully entered these codes in all three files of your project, your Android ListView output will look like this:
                    </p>
                    <p>
                      <b>Output</b>
                    </p>
                    <p className="blog-img">
                      <img src="asstes/image/listview.png" style={{width:"auto"}} />
                    </p>
                    <p>
                      All in all, creating a ListView is arguably one of the easiest things to do on Android Studio IDE. Although this is just the beginning, we are sure that you will be able to create your own Android application in no time if you continue to learn making new things through our tutorials.
                    </p>
                    </div> 
                  </Tab.Pane>
                  <Tab.Pane eventKey="twentyone">
                    <div className="tab-content-inner">
                      <h3 className="tab-seaction-heading">ScrollView in Android Example​</h3>
                    </div>
                    <div className="tab-emergence">
                      <p>
                      ScrollView is used to scroll the elements in vertical direction. We use android.widget.ScrollView class functionality for this scroll.
                      </p>
                      <p>
                        CODE
                      </p>
                      <div className="centered-images">
                        <p className="blog-img">
                          <img src="asstes/image/vscrollview-1.png" style={{width:"auto"}} />
                        </p>
                        <p className="blog-img">
                          <img src="asstes/image/vscrollview-2.png" style={{width:"auto"}} />
                        </p>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="twentytwo">
                    <div className="tab-content-inner">
                      <h3 className="tab-seaction-heading">Horizontal ScrollView in Android Example</h3>
                    </div>
                    <div className="tab-emergence">
                      <p>
                      Horizontal ScrollView in Android is used to scroll the elements in horizontal direction. We use android.widget.HorizontalScrollView class functionality for this scroll.
                      </p>
                      <p>
                        CODE
                      </p>
                      <p>
                        <b>Output</b>
                      </p>
                      <div className="centered-images">
                        <p className="blog-img">
                          <img src="asstes/image/hscrollview-1.png" style={{width:"auto"}} />
                        </p>
                        <p className="blog-img">
                          <img src="asstes/image/hscrollview-2.png" style={{width:"auto"}} />
                        </p>
                      </div>
                    </div> 
                  </Tab.Pane>
                  <Tab.Pane eventKey="twentythree">
                    <div className="tab-content-inner">
                      <h3 className="tab-seaction-heading">WebView in Android Example</h3>
                    </div>
                    <div className="tab-emergence">
                    <p>
                      An Android application is a world of its own. What is more interesting is that some of these “worlds” allow you to travel to another world, i.e. a website. The Android apps that let us do this use an extraordinary tool called WebView.
                      </p>
                      <p>
                      Needless to say, this feature is incredibly important as it lets us perform such a huge task. For this reason, Android app developers really need to study Web View properly in order to create multifunctional apps that provide a great user experience. In this article, we are going to learn the basics of the WebView tool and how you can apply it in your Android application.
                      </p>
                      <h5 class="tab-seaction-heading subminheading">WebView in Android</h5>
                      <p>
                      In Android development, the Web View tool allows an app developer to integrate a web page as a part of his application. The integrated web page can either be loaded from the Android application or the URL of the web page. In simpler words, Web View is used to display online content in an Android app activity, or you can say that it turns an Android app into a web app.
                      </p>
                      <p>
                      Not only that, a Web View also provides many additional features that a desktop browser has, such as cookies, history management, HTML5 support and many more. Also, by using Web View, we can specify an HTML string in order to show it in one of our application activities.
                      </p>
                      <p>
                      To display a web page in an app, the Web View tool in Android has to use the Webkit engine. In the android.webkit package, Web View is a subclass of the Absolute Layout class in Android. The Absolute Layout class is a subclass of ViewGroup, which is a subclass of View. With this chain of classes, the Android Web View component becomes a complete browser embedded into an application.
                      </p>
                      <h5 class="tab-seaction-heading subminheading">Web View vs Text View</h5>
                      <p>
                      Both Web View and Text View widgets have been here since Android API 1 and used for similar purposes. Naturally, Text View is used for text rendering, whereas Web View is used for web page rendering. However, if used smartly, both can be used for rich text and image rendering.
                      </p>
                      <p>
                      Simple formatting, such as font faces, styles, colors, links, etc., can rendered by Text View. It also handles only a limited set of HTML tags. With Text View, separate widgets have to be used for fetching images and intercepting hyperlinks. Also, Text View consumes significantly more memory than Web View. For these reasons, browsing sites like Facebook is not possible with a Text View. Instead, in such cases, Web View is the obvious choice.
                      </p>
                      <p>
                      In contrast to Text View, Web View can handle more complex text formatting. Not only that, the Web View widget supports most HTML tags as it is meant for HTML display. In addition to that, Web View can also be used to handle JavaScript and CSS, which is not possible with Text View. Furthermore, Web View can also help with the usual browsing metaphors, like the history of visited URLs. This is particularly useful for forward and backward navigation. Even though, Web View has been optimized to be memory efficient, it uses CPU (Central Processing Unit) and GPU (Graphics Processing Unit) more than Text View.
                      </p>
                      <h5 class="tab-seaction-heading subminheading">Web View in Android Steps</h5>
                      <p>
                      If you wish to implement Web View in your Android application, you will need to use the Android Studio IDE (Integrated Development Environment). Therefore, you may start by opening the Android Studio IDE.
                      </p>
                      <p>
                      Then, you need to “create a new project” on the Android Studio IDE. For this step, our earliest tutorials would be helpful for you. As you are creating a project, you will be asked to enter a project name and package name for your project.
                      </p>
                      <p>
                      We have set “webview” as our project name and “com.androidaura.webview” as our package name.
                      </p>
                      <p>
                      After creating a project, open your MainActivity.java class file so you can enter the following java code:
                      </p>
                      <p>
                      CODE
                      </p>
                      <p>
                      After creating a project, open your MainActivity.java class file so you can enter the following java code:
                      </p>
                      <p>
                      Now, you must open the activity_main.xml file in order to add the following code:
                      </p>
                      CODE
                      <p>
                      <p>
                        CODE
                      </p>
                      <p>
                      In the next step, you have to open your AndroidManifest.xml file and add the code mentioned below:
                      </p>
                      <p class="code-commend">
                      // AndroidManifest.xml <br /> {`<uses-permission android:name="android.permission.INTERNET" /> `} 
                      </p>
                      <p>
                      The Android Manifest code is important. If you wish for one of your Activities to access the internet and load web pages, you need internet permissions. These permissions are added in the Android Manifest file.
                      </p>
                      <p>
                      The “” part in our Manifest file defines internet permission to access it in our project.
                      </p>
                      <p>
                      Once you have entered all your codes in the right files, your project will be ready to run. So launch your project in this step and you will get an output that looks like this:
                      </p>

                        <b>Output</b>
                      </p>
                      <div className="centered-images">
                        <p className="blog-img">
                          <img src="asstes/image/webview.png" style={{width:"auto"}} />
                        </p>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="twentyfour">
                  <div className="tab-content-inner">
                      <h3 className="tab-seaction-heading">Implicit Intent in Android Example</h3>
                    </div>
                    <div className="tab-emergence">
                        <p>
                        Even though smart phones have become inseparable companions for nearly all of us, we do not think much about the activities taking place behind everything that we see on the screen. For instance, many of us do not know that the applications on our smart phones can interact and share information with each other. This brings us to our new subject: <b>Implicit Intent</b> in Android.
                        </p>
                        <p>
                        Before we explain <p>Implicit Intent</p> in Android to you, you must understand what an Android Intent is. Suppose you are using a social media application, such as Instagram, and want to click a picture in the application. In this situation, an Android Intent will enable your social app to simply request the camera app to click a picture and send the picture back to the social app.
                        </p>
                        <p>
                        Therefore, an Android Intent is used when an application needs to make a request to any Android component of another application (or the same application) on a device in order to perform an operation. In simpler words, an Android Intent is a bridge between Android components. By using an Android Intent, app components communicate with each other, requesting for required actions.
                        </p>
                        <p>
                        In actuality, the object of an Android Intent is a PDS (passive data structure) that carries only abstract description of the operation that is required. In short, the object holds information that defines the required operation. The Android System, then, uses this information to select the component that can handle the operation or “intent.”
                        </p>
                      <h5 class="tab-seaction-heading subminheading">Types of Android Intent</h5>
                      <p>
                      On the basis of the targeted component of the Intent, Android Intent is divided into two types: Implicit Intent and Explicit Intent. In this tutorial, we will discuss Implicit Intent only. For Explicit Intent, a separate tutorial is available on our website.
                      </p>
                      <h5 class="tab-seaction-heading subminheading">Implicit Intent in Android</h5>
                      <p>
                      In Android development, Implicit Intent is the type of Intent that does not specify the targeted component. Instead, Implicit Intent describes the operation (and sometimes data to provide content for the operation) that is required by the app. When an Android System receives an incoming Intent, it checks the whole device for all the components that can handle the Intent. When there is only one component that is able to handle the Intent, the system simply launches that single component.
                      </p>
                      <p>
                      However, if the device has more than one component that can handle the Intent, then the system displays a dialog box to the user. This dialog box shows all the appropriate components for the Intent. Out of these choices, the user has to select only one to perform the required operation.
                      </p>
                      <p>
                      The mode of action of Implicit Intent in Android enables it to perform basic interactions with other apps.For better understanding of Implicit Intent, let us give you a few examples. In the beginning of this article, we gave you an example that described an interaction between a social app and the camera app. That was an example of Implicit Intent.
                      </p>
                      <p>
                      Another example of Implicit Intent is when an Android app developer wants to show a location on a map to the user. For this, the developer can use an Implicit Intent to send a request to a capable app, such as Google Maps, asking to show the specific location on its map.
                      </p>
                      <h5 class="tab-seaction-heading subminheading">Important Methods of Implicit Intent in Android</h5>
                      <p>
                      In Android development, many methods are used to implement an Implicit Intent in an application. However, there are a few fundamental methods that are so important to execute an Implicit Intent that all Android developers must learn about them. So here are the three most important methods for implementing Implicit Intent in Android.
                      </p>
                      <p>
                      <b>Context.startActivity()</b> This method is used for either launching a new activity or making an existing activity to perform the action.
                      </p>
                      <p>
                      <b>Context.startService()</b> This method is used for either starting a new service or delivering instructions to an existence service.
                      </p>
                      <p>
                      <b>Context.sendBroadcast()</b> This method is used for delivering the message to broadcast receivers.
                      </p>
                      <h5 class="tab-seaction-heading subminheading">Implicit Intent in Android Steps</h5>
                      <p>
                      After covering all the important points regarding Implicit Intent, the only thing left now is implementing Implicit Intent in Android. In this example, we will make use of Implicit Intent to open a webpage in a way that makes multiple apps, our project and a browser(s), interact with each other.
                      </p>
                      <p>
                      First off, launch the Android Studio IDE (Integrated development Environment), and create a new project in the same manner as mentioned in our previous tutorials.
                      </p>
                      <p>
                      Then, select a suitable name for your project. For example, we have selected “Implicit Intent” as our project name. After doing this, set an appropriate package name for your project. For example, we have selected “com.androidaura.intent” as our package name.
                      </p>
                      <p>
                      In the next step, open the MainActivity.java class file of your project in order to add the following code in it:
                      </p>
                      <p>CODE</p>
                      <p>
                      Basically, this code develops a template for our whole project. Without this template, no further activity can be performed on our project. For this reason, it is highly important to have this code for our project. By using this code, we have set the basic characteristics of our project, such as giving our project a button by using the Button widget and a space to add and remove text by using the EditText widget.
                      </p>
                      <p>
                      Apart from adding features in our product, this code also defines what those features would do when they are used. For instance, the code establishes that clicking on the button would initiate the process of delivering the request for finding an app that can be used to open a webpage. In addition to that, we have used ACTION_VIEW as our action on Intent with the webpage URL as the URI (data on which action is performed).
                      </p>
                      <p>
                      After adding the code in your java class file, you have to open the layout file, i.e. activity_main.xml, in order to add the following code in it:
                      </p>
                      <p>
                        CODE
                      </p>
                      <p>
                      If you observe the abovementioned code, we have used this file to develop our UI (User Interface) elements. For example, we have used this code to establish that our button would have the text “Submit” written on it. Other than that, we have also set the default state of our text field to have “Enter URL” in order to hint the user what kind of data the project will accept.
                      </p>
                      <p>
                        <b>Output</b>
                      </p>
                      <p>
                      After adding the abovementioned codes in both files of your project, your project will be ready to be launched and show you what your codes have achieved. After launching your project, your output should look something like this:
                      </p>
                      <p>
                        <b>Output</b>
                      </p>
                      <div className="centered-images">
                        <p className="blog-img">
                          <img src="asstes/image/iintent-1.png" style={{width:"auto"}} />
                        </p>
                        <p className="blog-img">
                          <img src="asstes/image/iintent-2.png" style={{width:"auto"}} />
                        </p>
                      </div>
                      <p>
                      Not every application can perform every operation. Therefore, we hope that you have understood the significance of having such a useful tool in our Android applications through this tutorial. And with this, we have reached the end of our tutorial. We hope you can now implement Implicit Intent in your application properly.
                      </p>
                      </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="twentyfifve">
                  <div className="tab-content-inner">
                      <h3 className="tab-seaction-heading">Explicit Intent in Android Example</h3>
                    </div>
                    <div className="tab-emergence">
                    <p>
                    Explicit Intent in Android – Although it does not look very complex through the eyes of a user, there are hundreds of operations taking place in an Android application as the user continues using it. Out of a large population, only a few curious users would know that there are tons of interactions occurring within a single Android app at a time. If you are a newly curious user looking for information on interactions within a single app, you came to the right place.
                    </p>
                    <p>
                    The tool that enables an Android app to have its components interact with each other is called Android Intent. To put it in layman’s terms, an Android Intent is a bridge that connects Android components. With the help of an Android Intent, two app components communicate with each other. You must be wondering why app components need to communicate with each other.
                    </p>
                    <p>
                    The reason for that is simple: A single app component cannot do everything. In order to be complete, an application must be able to make use of multiple components and possess the ability to transfer data from one component to the other. And this is where Android Intent comes in.
                    </p>
                    <p>
                    An Android Intent is used when an application has to request an Android component in order to perform an operation for it. This component can either belong to the same application or any other application present on the device.
                    </p>
                    <p>
                    By its nature, the object of an Android Intent is a passive data structure (commonly known as PDS). This PDS only holds abstract description of the required operation. In other words, the Android Intent object carries the information that defines the requested operation. When the request is sent, the Android System uses the object’s information in order to select a component that is able to fulfill the intent.
                    </p>
                    <h5 class="tab-seaction-heading subminheading">Types of Android Intent</h5>
                    <p>
                    As it is mentioned before, the answering component of an Android Intent could be from the same app or a different app. This divides the Android Intent into two:
                    </p>
                    <p>
                      <ul>
                        <li>Implicit Intent</li>
                        <li>Explicit Intent</li>
                      </ul>
                    </p>
                    <p>
                    In this article, we will only discuss <b>Explicit Intent</b> and how to implement it in an Android application. However, as far as Implicit Intent is concerned, we have discussed it in a separate tutorial.
                    </p>
                    <h5 class="tab-seaction-heading subminheading">Explicit Intent in Android</h5>
                    <p>
                    In Android, Explicit Intent is the type of Intent that explicitly defines the name of the component to be invoked by the Intent. It means that the app knows what the targeted component is and if it exists on the device or not. For this reason, Explicit Intent in Android is most commonly used for invoking components within an application. In other words, Explicit Intent connects the internal world of an application; this is done by connecting one activity to another.
                    </p>
                    <p>
                    Basically, an Explicit Intent in Android specifies the targeted component directly by identifying it by its package or class name. Then, the Android System only revolves the given name and launches the targeted component directly. Usually, Explicit Intent in Android is applied in an app for various reasons, such as calling a new activity or service to be launched in response to a user action and passing information from one activity to a second activity.
                    </p>
                    <p>
                    Consider an Android calculator application page that has two text fields and a button to initiate addition. When a user fills both the text fields with numbers and clicks the button, a new page is opened that shows the result of the addition. This is an example of Explicit Intent in Android.
                    </p>
                    <p>
                    Another example of Explicit Intent in Android can be seen on applications that require users to enter their username and password. When a user is on the login page of an app, he enters his username and password correctly and submits this information. Doing so opens a new page in the same app that displays his profile, which has his username as well. This is an example of using Explicit Intent to pass information from one activity to another. In this example, the information is the username.
                    </p>
                    <h5 class="tab-seaction-heading subminheading">Important Methods of Explicit Intent in Android</h5>
                    <p>
                    Now that you know what the Explicit Intent tool is and how it works in Android applications, it is time for us to move towards learning how to code this tool into our applications.
                    </p>
                    <p>
                    Android app developers use many methods when it comes to implementing Explicit Intent in an application. Out of those methods, a few methods are very important and basic for the implementation of Explicit Intent. Here are the three most important methods used for Explicit Intent in Android.
                    </p>
                    <p>
                    <b>Context.startActivity()</b> This method is used for launching a new activity. It is also used for making an existing activity to perform the operation.
                    </p>
                    <p>
                    <b>Context.startService()</b> This method is used for starting a new service. Other than that, it is used for delivering instructions to an existence service.
                    </p>
                    <p>
                    <b>Context.sendBroadcast()</b> This method is used for delivering broadcast intent to broadcast receivers.
                    </p>
                    <h5 class="tab-seaction-heading subminheading">Explicit Intent in Android Steps</h5>
                    <p>
                    You must be thinking that a tool like Explicit Intent with such a complex way of working is very hard to implement in an Android application. Here is the truth: It’s not hard, especially not with our tutorial to help you. In this example, we will be showing you how to make use of Explicit Intent to call a new activity to be launched in response to a user action.
                    </p>
                    <p>
                    To start the process of coding to implement Explicit Intent in Android, you must open the Android Studio IDE (Integrated development Environment) first.
                    </p>
                    <p>
                    After opening Android Studio, create a new project. The detailed method of creating a new project is discussed in our earlier tutorials.
                    </p>
                    <p>
                    While you are creating a new project, select an appropriate name for your project. If you can’t come up with a project name, you can use the same project name as ours. We have simply used “Intent” as our project name.
                    </p>
                    <p>
                    You will also be asked to use a suitable package name for your project. You can take our package name, which is “com.androidaura.eintent,” as an example.
                    </p>
                    <p>
                    When you are done with creating a new project, open the MainActivity.java class file of your project in order to add the following code in it:
                    </p>
                    <p>CODE</p>
                    <p>
                    As you know that we have two screens or activities in our project, this code is for the first screen. With this code, we have defined the basic elements of our first screen and what they will do. For example, we have used the Button widget to give our screen a button, which will take the user to the second screen when used. This is done by using setOnClickListener() method to apply OnClick event on the button.
                    </p>
                    <p>
                    Now, open the layout file, i.e. activity_main.xml, of your project so that you can add the following code in it:
                    </p>
                    <p>CODE</p>
                    <p>
                    With this code, we have designed the UI (User Interface) of our first screen. For example, we have used this code to give the button of the first screen to have the text “Button 1” written on it. After coding in your activity_main.xml layout file, create a new java class file, name it “SecondActivity.java” and add the following code in it.
                    </p>
                    <p>CODE</p>
                    <p>
                    We have used this java code for our second screen. This code will simply open the layout of the second screen. In this file, the code says that we have given our second screen a button (by using the Button widget) and a message for the user (by using the Toast widget). The Toast message is coded to read “Hello From Activity One” and disappear after a short time.
                    </p>
                    <p>
                    Now, create a new XML layout file and name it “activity_second.xml” to add the following code in it:
                    </p>
                    <p>CODE</p>
                    <p>
                    Similar to our first XML layout file, we have used this file and code to design the UI but of the second screen this time. For example, with this code, we have designed the button of this screen to have the text “Button 2” written on it.
                    </p>
                    <p>
                    After this, create a new <b>AndroidManifest.xml</b> file. This file will contain the information of your package, like application components, such as services, broadcast receivers, activities, etc. In your AndroidManifest.xml file, enter the following code:
                    </p>
                    <p class="code-commend"> <span className="gray-line-code">// AndroidManifest.xml</span> <br /> 
                    {`<activity android:name=".SecondActivity"/> `}
                    </p>
                    <p>
                    The most important thing to note and remember in this code is the placement of intent filter. Make sure you correctly add the intent filter right after the main activity.
                    </p>
                    <p>
                    After entering all the above-mentioned codes in their respective files, your project will be ready to be launched. After launching your project, you will be able to see the output of your coding. With our codes, your output would look like this:
                    </p>
                    <div className="centered-images">
                        <p className="blog-img">
                          <img src="asstes/image/eintent-1 (1).png" style={{width:"auto"}} />
                        </p>
                        <p className="blog-img">
                          <img src="asstes/image/eintent-2 (1).png" style={{width:"auto"}} />
                        </p>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="twentysix">
                  <div className="tab-content-inner">
                      <h3 className="tab-seaction-heading">Pass Values using Bundle Android</h3>
                    </div>
                    <div className="tab-emergence">
                      <p>
                      We use bundle to pass data between activities. Below are the ways to pass data using bundle between activities.
                      </p>
                      <p>CODE</p>
                      <p>
                      Data from a Bundle can be sent in the following way in FirstActivity.java
                      </p>
                      <b>FirstActivity.java</b>
                      CODE
                      <p>
                      In activity_main.xml file we are adding EditText and Button to enter phone number and to make call.
                      </p>
                      <p>CODE</p>
                      <p>
                      Data from a Bundle can be obtained in the following way in SecondActivity.java
                      </p>
                      <p>CODE</p>
                      <p>
                        <b>activity_second.xml</b>
                      code
                      </p>
                      <p class="code-commend"> <span className="gray-line-code">// Add permission in AndroidManifest.xml file</span> <br /> 
                      {` <activity android:name=".SecondActivity"/>  `}
                      </p>
                      <p>
                        <b>Output</b>
                      </p>
                      <div className="centered-images">
                        <p className="blog-img">
                          <img src="asstes/image/bundle.png" style={{width:"auto"}} />
                        </p>
                        <p className="blog-img">
                          <img src="asstes/image/bundle2.png" style={{width:"auto"}} />
                        </p>
                      </div>
                    </div> 
                  </Tab.Pane>
                  <Tab.Pane eventKey="twentyseven">
                  <div className="tab-content-inner">
                      <h3 className="tab-seaction-heading">How to make phone call</h3>
                    </div>
                    <div className="tab-emergence">
                      <p>
                      In this example we’ll see how to make a phone call using an Intent object in the android to invoke the default phone calls feature.
                      </p>
                      <p>CODE</p>
                      <p>CODE</p>
                      <p>
                      In activity_main.xml file we are adding EditText and Button to enter phone number and to make call.
                      </p>
                      <p>CODE</p>
                      <p class="code-commend"> 
                      <span className="gray-line-code">// Now add CALL_PHONE permission in AndroidManifest.xml file</span> <br /> 
                      {`   <uses-permission android:name="android.permission.CALL_PHONE" /> `}
                      </p>
                      <p>
                        <b>Output</b>
                      </p>
                      <div className="centered-images">
                        <p className="blog-img">
                          <img src="asstes/image/phone.png" style={{width:"auto"}} />
                        </p>
                      </div>
                    </div> 
                  </Tab.Pane>
                  <Tab.Pane eventKey="twentyeight">
                  <div className="tab-content-inner">
                      <h3 className="tab-seaction-heading">Send SMS in Android</h3>
                    </div>
                    <div className="tab-emergence">
                      <p>
                      Send SMS in android, we can send text messages in two ways, using either SMSManager API or Intents.
                      </p>
                      <p>CODE</p>
                      <p>CODE</p>
                      <p>CODE</p>
                      <p><b>Another Way Using Intent</b></p>
                      <p>CODE</p>
                      <p>
                      Add android.permission.SEND_SMS permission in AndroidManifest.xml file
                      </p>
                      <p class="code-commend"> 
                      <span className="gray-line-code">// AndroidManifest.xml</span> <br /> 
                      {` <uses-permission android:name="android.permission.SEND_SMS"/>  `}
                      </p>
                      <p>
                        <b>Output</b>
                      </p>
                      <div className="centered-images">
                        <p className="blog-img">
                          <img src="asstes/image/sms.png" style={{width:"auto"}} />
                        </p>
                      </div>
                    </div> 
                  </Tab.Pane>
                  <Tab.Pane eventKey="twentynine">
                  <div className="tab-content-inner">
                      <h3 className="tab-seaction-heading">Sending Email in Android</h3>
                    </div>
                    <div className="tab-emergence">
                      <p>CODE</p>
                      <p>
                      Below is the example of sending an email to current email clients using the android application.
                      </p>
                      <p>CODE</p>
                      <p>CODE</p>
                      <p><b>Another Way Using Intent</b></p>
                      <p>CODE</p>
                      <p>
                        <b>Output</b>
                      </p>
                      <div className="centered-images">
                        <p className="blog-img">
                          <img src="asstes/image/email-1.png" style={{width:"auto"}} />
                        </p>
                        <p className="blog-img">
                          <img src="asstes/image/email-2.png" style={{width:"auto"}} />
                        </p>
                      </div>
                    </div> 
                  </Tab.Pane>
                  <Tab.Pane eventKey="thirty">
                  <div className="tab-content-inner">
                      <h3 className="tab-seaction-heading">change launcher Icon</h3>
                      <div className="centered-images">
                        <p className="blog-img">
                          <img src="asstes/image/launcher_1.png" style={{width:"auto"}} />
                        </p>
                      </div>
                    </div>
                    <div className="tab-emergence">
                    <div className="table-div">
                    <table class="table table-striped table-bordered table-hover">
                      <tbody>
                        <tr>
                          <td>LDPI </td>
                          <td>	36 x 36</td>
                        </tr>
                        <tr>
                          <td>MDPI</td>
                          <td>48 x 48</td>
                        </tr>
                        <tr>
                          <td>TVDPI</td>
                          <td>64 x 64</td>
                        </tr>
                        <tr>
                          <td>HDPI</td>
                          <td>72 x 72</td>
                        </tr>
                        <tr>
                          <td>XHDPI</td>
                          <td>96 x 96</td>
                        </tr>
                        <tr>
                          <td>XXHDPI</td>
                          <td>144 x 144</td>
                        </tr>
                        <tr>
                          <td>XXXHDPI</td>
                          <td>192 x 192</td>
                        </tr>
                        <tr>
                          <td>WEB</td>
                          <td>512 x 512</td>
                        </tr>
                      </tbody>
                    </table>
                    </div>
                    <div className="centered-images">
                        <p className="blog-img">
                          <img src="asstes/image/mac.png" style={{width:"auto"}} />
                        </p>
                        <p className="blog-img">
                          <img src="asstes/image/mac2.png" style={{width:"auto"}} />
                        </p>
                        <p className="blog-img">
                          <img src="asstes/image/mac3.png" style={{width:"auto"}} />
                        </p>
                        <p className="blog-img">
                          <img src="asstes/image/mac4.png" style={{width:"auto"}} />
                        </p>
                        <p className="blog-img">
                          <img src="asstes/image/launcher_6.png" style={{width:"auto"}} />
                        </p>
                        <p className="blog-img">
                          <img src="asstes/image/mac6.png" style={{width:"auto"}} />
                        </p>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="thirtyone">
                    <div className="tab-content-inner">
                      <h3 className="tab-seaction-heading">Login Screen Design</h3>
                    </div>
                    <div className="tab-emergence">
                      <div className="centered-images">
                        <p className="blog-img">
                          <img src="asstes/image/loginscreenxml2.svg" style={{width:"auto"}} />
                        </p>
                      </div>
                      <p>code</p>
                      <p>code</p>
                      <p>code</p>
                      <p>code</p>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

export default Blog;
