# Getting Started with Faktory in JavaScript

Faktory is designed to be as easy as possible for developers to run and
use.

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

## Dependencies

Faktory itself has very few dependencies but this example assumes you
have a modern Node runtime installed. Run one of:

```
brew install node
brew upgrade node
```
