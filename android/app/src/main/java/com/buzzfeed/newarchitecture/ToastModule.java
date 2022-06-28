package com.buzzfeed.newarchitecture;


import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;


public class ToastModule extends ReactContextBaseJavaModule {
    public ToastModule(ReactApplicationContext context) {
        super(context);
    }
    @NonNull
    @Override
    
    public String getName() {
        return "ToastModule";
    }

    @ReactMethod
    public void ToastMessage() {

        Toast.makeText(getReactApplicationContext(), "Hello Welcome to buzzfeed", Toast.LENGTH_SHORT).show();

    }

}