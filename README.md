
## Relationship with Claim project
It is consuming claims component from the remote claim MFE app. It is reflected on default route:
<img width="931" alt="ClaimsApp" src="https://github.com/facundoVega/root-shell-mfe/assets/11906403/eed82170-d49e-49a8-a60c-96bfea6a9291">


## Relationship with Shared project:

### Getting Components from  Shared project:
This project is getting header and footer components from shared project. The header component is a standalone component and the foooter is a regular Angular component
, so this demonstration covers both scenarios.
![image](https://github.com/facundoVega/root-shell-mfe/assets/11906403/b2fe3c73-b457-4bbb-b257-4e4c71b38a95)


### Getting Service from  Shared project:
This project is getting the "testService" from shared MFE app too, you can visualize the implementation on table-component. This is reflected on the "/heroes" route:
![image](https://github.com/facundoVega/root-shell-mfe/assets/11906403/e5cfa232-a996-48f1-b0a1-5f9814cb6c94)


## How to run this solution:
Clone claims repo: https://github.com/facundoVega/mfe2-remote-mfe
Clone Shared repo: https://github.com/facundoVega/shared-remote-mfe

serve this repos on following order:
1) Claims
2) Shared
3) Root
