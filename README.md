# WXT + React

This template should help get you started developing with React in WXT.




I am Building  a Chrome Extension with WXT (ReactJs) and TypeScript and I got this error while executing this code : 


My Code : const handleColorPick = async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    await chrome.scripting.executeScript({
      target: { tabId: tab.id as number },
      func: () => {
        console.log("Args");
      },
    });
  }; 


Error Message : 

Uncaught (in promise) Error: Cannot access contents of url "https://github.com/yeasin2002?tab=repositories". Extension manifest must request permission to access this host.
await (async)
callCallback2 @ react-dom_client.js?v=1da4dae2:3672
invokeGuardedCallbackDev @ react-dom_client.js?v=1da4dae2:3697
invokeGuardedCallback @ react-dom_client.js?v=1da4dae2:3731
invokeGuardedCallbackAndCatchFirstError @ react-dom_client.js?v=1da4dae2:3734
executeDispatch @ react-dom_client.js?v=1da4dae2:7012
processDispatchQueueItemsInOrder @ react-dom_client.js?v=1da4dae2:7032
processDispatchQueue @ react-dom_client.js?v=1da4dae2:7041
dispatchEventsForPlugins @ react-dom_client.js?v=1da4dae2:7049
(anonymous) @ react-dom_client.js?v=1da4dae2:7172
batchedUpdates$1 @ react-dom_client.js?v=1da4dae2:18911
batchedUpdates @ react-dom_client.js?v=1da4dae2:3577
dispatchEventForPluginEventSystem @ react-dom_client.js?v=1da4dae2:7171
dispatchEventWithEnableCapturePhaseSelectiveHydrationWithoutDiscreteEventReplay @ react-dom_client.js?v=1da4dae2:5476
dispatchEvent @ react-dom_client.js?v=1da4dae2:5470
dispatchDiscreteEvent @ react-dom_client.js?v=1da4dae2:5447
Show 15 more frames
Show less