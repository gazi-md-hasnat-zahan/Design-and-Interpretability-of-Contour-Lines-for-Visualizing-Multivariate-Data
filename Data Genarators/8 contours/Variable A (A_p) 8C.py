import matplotlib
matplotlib.use("agg")
from sklearn.datasets.samples_generator import make_blobs
from sklearn.datasets import make_gaussian_quantiles
from matplotlib import pyplot
from pandas import DataFrame
import numpy as np
from scipy import interpolate

clusternumber = '4';

# for Bn
pyplot.title("Gaussian divided into three quantiles", fontsize='small')
AX1, AY1 = make_gaussian_quantiles(n_samples=40000,cov=1, n_features=2, n_classes=7)
BX1, BY1 = make_gaussian_quantiles(n_samples=40000,cov=10, n_features=2, n_classes=7)
CX1, CY1 = make_gaussian_quantiles(n_samples=40000,cov=5, n_features=2, n_classes=7)
DX1, DY1 = make_gaussian_quantiles(n_samples=40000,cov=7, n_features=2, n_classes=7)


AX2 = np.copy(AX1)
BX2 = np.copy(BX1)
CX2 = np.copy(CX1)
DX2 = np.copy(DX1)

AX2[:,0] = np.interp(AX1[:,0], (np.min(AX1[:,0]), np.max(AX1[:,0])), (-10, 119))
AX2[:,1] = np.interp(AX1[:,1], (np.min(AX1[:,1]), np.max(AX1[:,1])), (-20, 139))

BX2[:,0] = np.interp(BX1[:,0], (np.min(BX1[:,0]), np.max(BX1[:,0])), (-24, 144))
BX2[:,1] = np.interp(BX1[:,1], (np.min(BX1[:,1]), np.max(BX1[:,1])), (40, 219))

CX2[:,0] = np.interp(CX1[:,0], (np.min(CX1[:,0]), np.max(CX1[:,0])), (50, 209))
CX2[:,1] = np.interp(CX1[:,1], (np.min(CX1[:,1]), np.max(CX1[:,1])), (-20, 149))

DX2[:,0] = np.interp(DX1[:,0], (np.min(DX1[:,0]), np.max(DX1[:,0])), (49, 199))
DX2[:,1] = np.interp(DX1[:,1], (np.min(DX1[:,1]), np.max(DX1[:,1])), (60, 209))


AX3 = AX2.reshape(200,200,2)
AY2 = AY1.reshape(200,200)
BX3 = BX2.reshape(200,200,2)
BY2 = BY1.reshape(200,200)
CX3 = CX2.reshape(200,200,2)
CY2 = CY1.reshape(200,200)
DX3 = DX2.reshape(200,200,2)
DY2 = DY1.reshape(200,200)


level00countA = np.zeros((200,200))
level125countA = np.zeros((200,200))
level25countA = np.zeros((200,200))
level375countA = np.zeros((200,200))
level50countA = np.zeros((200,200))
level675countA = np.zeros((200,200))
level75countA = np.zeros((200,200))



for i in range(200):
    for j in range(200):
        xval = int(np.floor(AX3[i][j][0]))
        yval = int(np.floor(AX3[i][j][1]))
        if (xval > 199 or yval > 199 or xval < 0 or yval < 0):
            continue;        
        if AY2[i][j] == 0:
            level00countA[xval][yval] = level00countA[xval][yval] + 1;
        elif AY2[i][j] == 1:
            level125countA[xval][yval] = level125countA[xval][yval] + 1;
        elif AY2[i][j] == 2:            
            level25countA[xval][yval] = level25countA[xval][yval] + 1;
        elif AY2[i][j] == 3:
            level375countA[xval][yval] = level375countA[xval][yval] + 1;
        elif AY2[i][j] == 4:            
            level50countA[xval][yval] = level50countA[xval][yval] + 1;
        elif AY2[i][j] == 5:
            level675countA[xval][yval] = level675countA[xval][yval] + 1;
        elif AY2[i][j] == 6:            
            level75countA[xval][yval] = level75countA[xval][yval] + 1;

            
            
for i in range(200):
    for j in range(200):
        xval = int(np.floor(BX3[i][j][0]))
        yval = int(np.floor(BX3[i][j][1]))
        if (xval > 199 or yval > 199 or xval < 0 or yval < 0):
            continue;
        if BY2[i][j] == 0:
            level00countA[xval][yval] = level00countA[xval][yval] + 1;
        elif BY2[i][j] == 1:
            level125countA[xval][yval] = level125countA[xval][yval] + 1;
        elif BY2[i][j] == 2:            
            level25countA[xval][yval] = level25countA[xval][yval] + 1;
        elif BY2[i][j] == 3:
            level375countA[xval][yval] = level375countA[xval][yval] + 1;
        elif BY2[i][j] == 4:            
            level50countA[xval][yval] = level50countA[xval][yval] + 1;
        elif BY2[i][j] == 5:
            level675countA[xval][yval] = level675countA[xval][yval] + 1;
        elif BY2[i][j] == 6:            
            level75countA[xval][yval] = level75countA[xval][yval] + 1;
            
for i in range(200):
    for j in range(200):
        xval = int(np.floor(CX3[i][j][0]))
        yval = int(np.floor(CX3[i][j][1]))
        if (xval > 199 or yval > 199 or xval < 0 or yval < 0):
            continue;
        if CY2[i][j] == 0:
            level00countA[xval][yval] = level00countA[xval][yval] + 1;
        elif CY2[i][j] == 1:
            level125countA[xval][yval] = level125countA[xval][yval] + 1;
        elif CY2[i][j] == 2:            
            level25countA[xval][yval] = level25countA[xval][yval] + 1;
        elif CY2[i][j] == 3:
            level375countA[xval][yval] = level375countA[xval][yval] + 1;
        elif CY2[i][j] == 4:            
            level50countA[xval][yval] = level50countA[xval][yval] + 1;
        elif CY2[i][j] == 5:
            level675countA[xval][yval] = level675countA[xval][yval] + 1;
        elif CY2[i][j] == 6:            
            level75countA[xval][yval] = level75countA[xval][yval] + 1;

for i in range(200):
    for j in range(200):
        xval = int(np.floor(DX3[i][j][0]))
        yval = int(np.floor(DX3[i][j][1]))
        if (xval > 199 or yval > 199 or xval < 0 or yval < 0):
            continue;
        if DY2[i][j] == 0:
            level00countA[xval][yval] = level00countA[xval][yval] + 1;
        elif DY2[i][j] == 1:
            level125countA[xval][yval] = level125countA[xval][yval] + 1;
        elif DY2[i][j] == 2:            
            level25countA[xval][yval] = level25countA[xval][yval] + 1;
        elif DY2[i][j] == 3:
            level375countA[xval][yval] = level375countA[xval][yval] + 1;
        elif DY2[i][j] == 4:            
            level50countA[xval][yval] = level50countA[xval][yval] + 1;
        elif DY2[i][j] == 5:
            level675countA[xval][yval] = level675countA[xval][yval] + 1;
        elif DY2[i][j] == 6:            
            level75countA[xval][yval] = level75countA[xval][yval] + 1;
            
            
outA = np.ones((200,200))*.875

for i in range(200):
    for j in range(200):
        if level00countA[i][j] ==0 and level125countA[i][j] == 0 and level25countA[i][j] == 0 and level375countA[i][j] ==0 and level50countA[i][j] == 0 and level675countA[i][j] == 0 and level75countA[i][j] == 0:
            continue;
        elif level00countA[i][j] > 0:
            outA[i][j] = 0;
        elif level125countA[i][j] > 0:
            outA[i][j] = 0.125;
        elif level25countA[i][j] > 0:
            outA[i][j] = 0.25;
        elif level375countA[i][j] > 0:
            outA[i][j] = 0.375;            
        elif level50countA[i][j] > 0:
            outA[i][j] = .5;
        elif level675countA[i][j] > 0:
            outA[i][j] = 0.675;
        elif level75countA[i][j] > 0:
            outA[i][j] = 0.75;
            
outA2= outA.reshape(40000)
dfC = DataFrame(dict(A=outA2))
dfC.to_csv(r'E:\Research\CHI Project\Controlled Experiment\dataScaledCluster'+clusternumber+'A.csv')
