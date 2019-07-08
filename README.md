# Getting Started with Faktory in JavaScript

Faktory is designed to be as easy as possible for developers to run and
use.

## Clone

First clone this repo to get the demo app:

```
git clone git@github.com:contribsys/faktory_example.js.git
cd faktory_example.js
```

## Installation

You can use Homebrew to install Faktory on macOS.

```
brew tap contribsys/faktory
brew install faktory
```

Upgrade to the latest version in the future with `brew upgrade faktory`.


## Running the Example

You'll need to open three Terminal windows/tabs.

1. In tab 1, start Faktory.


```
faktory
```

2. In tab 2, start a client process pushing a new job to Faktory every second.

```
node ./fclient.js
```

3. In tab 3, start a worker process which fetches jobs from Faktory and
executes them:

```
node ./fworker.js
```

## Exploring

While all three tabs are busy, go to [http://localhost7420](http://localhost7420) and check out the Faktory Web UI. Poke around each tab, you might not see much initially.

If you stop the fworker.js process with Ctrl-C, you'll see jobs accumulate in the `default` queue in the Queues tab. If you go back to the Home tab and start the worker again, you'll see a spike of activity on the Dashboard graph as the worker processes all of the accumulated jobs almost immediately.

## Dependencies

Faktory itself has no dependencies but this example assumes you have a modern Node runtime installed. Run one of:

```
brew install node
brew upgrade node
```
