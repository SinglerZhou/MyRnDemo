package com.myrndemo.rn;

import android.app.Activity;
import android.content.Intent;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;

public class ReactNativeUtil extends ReactContextBaseJavaModule {
    private static final String TAG = "ReactNativeUtil";

    public ReactNativeUtil() {
    }

    public ReactNativeUtil(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "ReactNativeUtil";
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        return super.getConstants();
    }

    @ReactMethod
    public void startActivityFromJs(String name, String params) {
        Activity currentActivity = getCurrentActivity();
        if (null != currentActivity) {
            try {
                Class<?> toActivity = Class.forName(name);
                Intent intent = new Intent(currentActivity, toActivity);
                intent.putExtra("js_data", params);
                currentActivity.startActivity(intent);
            } catch (ClassNotFoundException e) {
                Log.i(TAG, "startActivity fail = " + e.getStackTrace());
                e.printStackTrace();

            }
        }
    }
}
