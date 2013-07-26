Streetmix
=========

Streetmix is a browser-based interactive tool that lets you design, remix, and share your neighborhood street.  Add trees or bike paths, widen sidewalks or traffic lanes, and learn how your decisions can impact your community.

Streetmix is currently live at http://streetmix.net/

![screenshot](https://raw.github.com/codeforamerica/streetmix/master/public/images/help/doc/screenshot-beta.jpg)

## <a name="about"></a>About

#### What are street sections?

A "section" is shortened way of saying "cross-section view", a type of 2D non-perspectival drawing commonly used in engineering and architecture to show what something looks like when you slice it in two pieces and then look at one slice head-on, to see how it is (or should be) assembled. Similarly, a street section is a cross section view of a street, showing the widths and placement of vehicle lanes, bike lanes, sidewalks, trees, street furniture or accessories (like benches or street lamps), as well as engineering information like how the road is sloped to facilitate drainage, or the locations of underground utilities. Although sections can be simplified line drawings, urban designers and landscape architects have created very colorful illustrative street sections, removing most of the engineering particulars to communicate how a street could be designed to feel safe, walkable or habitable.

![diagram1](https://raw.github.com/codeforamerica/streetmix/master/public/doc/thumb_section_marketstreet.png "Existing conditions section of Market Street, from the Better Market Street Plan, San Francisco")
![diagram2](https://raw.github.com/codeforamerica/streetmix/master/public/doc/thumb_section_2ndstreetcycles.png "Proposed one-way cycletrack design of Second Street, from the Great Second Street Plan, San Francisco")
![diagram3](https://raw.github.com/codeforamerica/streetmix/master/public/doc/thumb_section_illus.jpg "Example of an illustrative section, courtesy of Lou Huang")

#### Why does Streetmix exist?

In community meetings, one engagement activity is to create cut-out sheets of paper depicting different street components (like bike lanes, sidewalks, trees, etc.) and allow community members to reassemble them into their desired street structure. Planners and city officials can then take this feedback to determine a course of action for future plans. By creating an web-based version of this activity, planners can reach a wider audience than they could at meetings alone, and allow community members to share and edit each other's creations.

In addition, one of the goals of Streetmix is to be part of the national conversation around [Complete Streets][completestreets], or the Project for Public Spaces' [Rightsizing Streets Guide][rightsizing].

[completestreets]: http://www.smartgrowthamerica.org/complete-streets/complete-streets-fundamentals
[rightsizing]: http://www.pps.org/reference/rightsizing/

#### Why the name "Streetmix"?

"Streets" + "remix" :-)

#### How did this project start?

Streetmix was started as a [Code for America][cfa] hackathon project in January 2013, inspired by community meetings like the one described above, and a similar CfA project in 2012 called [Blockee][http://blockee.org/].

#### Credits

The team is comprised of 2013 Code for America fellows.

* [Ans Bradford][ans], media production
* [Ezra Spier][ahhrrr], cat herder, proto-urbanist
* [Katie Lewis][katie], illustrator
* [Lou Huang][louh], project lead, research, outreach, transit fan
* [Marc Hébert][marccfa], UX researcher, design anthropologist
* [Marcin Wichary][mwichary], UX, FE, PM, sharrow whisperer
* [Shaunak Kashyap][ycombinator], rear end engineering

[cfa]: http://codeforamerica.org/
[ahhrrr]: https://github.com/ahhrrr
[louh]: https://github.com/louh
[mwichary]: https://github.com/mwichary
[ans]: https://github.com/anselmbradford
[katie]: https://github.com/katielewis
[ycombinator]: https://github.com/ycombinator
[marccfa]: https://github.com/MarcCfA

You can contact us all together through our team e-mail address at streetmix@codeforamerica.org.

Also, this project was made possible by the support of Code for America staff and other 2013 fellows, as well as our network of urbanists, design and planning professionals, and testers, who have provided us countless amounts of time and feedback towards this development.


## <a name="development-setup"></a>Development Setup

### On Mac OS X 10

#### First-time setup

1) Download and install [Node.js](http://nodejs.org/).

2) Clone this remote repository to a folder on your computer. The rest of these instructions will refer to this folder as `$PROJECT_ROOT`.

    git clone $REMOTE_REPOSITORY_URL $PROJECT_ROOT

3) Install project dependencies.

    cd $PROJECT_ROOT
    npm install

4) The Streetmix back-end is a separate application running on a different server (or a different localhost port). For information about starting the back-end server, please read the instructions on the [back-end repository](https://github.com/codeforamerica/streetmix-be).

#### Every time you sync `$PROJECT_ROOT` with this remote repository.

1) Update project dependencies.

    cd $PROJECT_ROOT
    npm install

#### HOWTO: Start the application

1) Start the web server.

    cd $PROJECT_ROOT
    npm start

2) Load the application in your web browser.

    open http://localhost:8000

## <a name="usage"></a>Usage
TODO

## <a name="contributing"></a>Contributing
In the spirit of [free software][free-sw], **everyone** is encouraged to help
improve this project.

[free-sw]: http://www.fsf.org/licensing/essays/free-sw.html

Here are some ways *you* can contribute:

* by using alpha, beta, and prerelease versions
* by reporting bugs
* by suggesting new features
* by translating to a new language
* by writing or editing documentation
* by writing specifications
* by writing code (**no patch is too small**: fix typos, add comments, clean up
  inconsistent whitespace)
* by refactoring code
* by closing [issues][]
* by reviewing patches
* [financially][]

[issues]: https://github.com/codeforamerica/streetmix/issues
[financially]: https://secure.codeforamerica.org/page/contribute

## <a name="issues"></a>Submitting an Issue
We use the [GitHub issue tracker][issues] to track bugs and features. Before
submitting a bug report or feature request, check to make sure it hasn't
already been submitted. You can indicate support for an existing issue by
voting it up. When submitting a bug report, please include a [Gist][] that
includes a stack trace and any details that may be necessary to reproduce the
bug, including your gem version, Ruby version, and operating system. Ideally, a
bug report should include a pull request with failing specs.

[gist]: https://gist.github.com/

## <a name="pulls"></a>Submitting a Pull Request
1. Fork the project.
2. Create a topic branch.
3. Implement your feature or bug fix.
4. Add tests for your feature or bug fix.
5. Run `bundle exec rake test`. If your changes are not 100% covered, go back
   to step 4.
6. Commit and push your changes.
7. Submit a pull request. Please do not include changes to the gemspec or
   version file. (If you want to create your own version for some reason,
   please do so in a separate commit.)

## <a name="copyright"></a>Copyright
Copyright (c) 2013 Code for America. See [LICENSE][] for details.

[license]: https://github.com/codeforamerica/streetmix/blob/master/LICENSE.md

[![Code for America Tracker](http://stats.codeforamerica.org/codeforamerica/streetmix.png)](http://stats.codeforamerica.org/projects/streetmix)

