package com.myrndemo.ui;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;

import com.myrndemo.R;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    private ImageView mBackImageView;
    private Button mStartRnButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        initView();
        initEvent();
    }

    private void initEvent() {
        if (mBackImageView != null) {
            mBackImageView.setOnClickListener(this);
        }
        if (mStartRnButton != null) {
            mStartRnButton.setOnClickListener(this);
        }
    }

    private void initView() {
        mBackImageView = findViewById(R.id.activity_main_back);
        mStartRnButton = findViewById(R.id.activity_main_start_rn);
    }

    @Override
    public void onClick(View view) {
        switch (view.getId()) {
            case R.id.activity_main_back:
                MainActivity.this.finish();
                break;
            case R.id.activity_main_start_rn:
                Intent intent = new Intent(MainActivity.this, MainReactActivity.class);
                startActivity(intent);
                break;
            default:
                break;
        }
    }
}