# some-values

## I don't believe in magic
I don't believe in magic numbers  
I don't believe in magic strings  

When writing tests we often specify values
```
api.save(5)
expect(api.validate).calledWith(5)
```
This reads like 5 is important, but what if 5 isn't important, we are simply saying 'given I save a number I get a number'. Enter `some-values`...
```
api.save(a.number)
expect(api.validate).calledWith(a.number)
```


## Install
```
npm install --save-dev some-values
```

## Use it

### Basic
```
someValues = require('some-values')

a = someValues()
```

```
a.string // Returns a random string
a.string // Returns the same string

a.number // Returns a random number
a.number // Returns the same number
```

### Multiple
Need multiple values?
```
a = someValues()
b = someValues()

a.string // Returns a random string
b.string // Returns another random string
a.string // Returns the first string
```

### Supported Values

#### String
A random *Length* of *Char*  
0 < *Length* < 20  
*Char* = [a..b]  

#### Number
A random number of *Value*  
0 < *Value* < 100  

#### Digit
A random number of *Value*  
0 <= *Value* <= 9  

### Bring your own
```
a = someValues({
  string: () => 'myOwnString'
  reallyLongNumber: () => 1000 + Math.floor(Math.random()*1000)
  })
```


### What's on the horizon?
Add Date, ISO Datetime
