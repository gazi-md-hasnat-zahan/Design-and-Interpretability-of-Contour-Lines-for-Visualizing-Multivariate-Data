import matplotlib
matplotlib.use("agg")
from sklearn.datasets.samples_generator import make_blobs
from sklearn.datasets import make_gaussian_quantiles
from matplotlib import pyplot
from pandas import DataFrame
import numpy as np
from scipy import interpolate

# centers = [(-1, -1),(1, -1),(-1, 1),(1, 1)]
clusternumber = '4';
# for A
pyplot.title("Gaussian divided into three quantiles", fontsize='small')
AX1, AY1 = make_gaussian_quantiles(n_samples=40000,cov=1, n_features=2, n_classes=3)
BX1, BY1 = make_gaussian_quantiles(n_samples=40000,cov=10, n_features=2, n_classes=3)
CX1, CY1 = make_gaussian_quantiles(n_samples=40000,cov=5, n_features=2, n_classes=3)
DX1, DY1 = make_gaussian_quantiles(n_samples=40000,cov=7, n_features=2, n_classes=3)

AX2 = np.copy(AX1)
BX2 = np.copy(BX1)
CX2 = np.copy(CX1)
DX2 = np.copy(DX1)

AX2 = np.interp(AX1, (np.min(AX1), np.max(AX1)), (-20, 119))

BX2[:,0] = np.interp(BX1[:,0], (np.min(BX1[:,0]), np.max(BX1[:,0])), (-29, 159))
BX2[:,1] = np.interp(BX1[:,1], (np.min(BX1[:,1]), np.max(BX1[:,1])), (40, 229))

CX2[:,0] = np.interp(CX1[:,0], (np.min(CX1[:,0]), np.max(CX1[:,0])), (40, 209))
CX2[:,1] = np.interp(CX1[:,1], (np.min(CX1[:,1]), np.max(CX1[:,1])), (-15, 139))

DX2[:,0] = np.interp(DX1[:,0], (np.min(DX1[:,0]), np.max(DX1[:,0])), (59, 199))
DX2[:,1] = np.interp(DX1[:,1], (np.min(DX1[:,1]), np.max(DX1[:,1])), (70, 199))

AX3 = AX2.reshape(200,200,2)
AY2 = AY1.reshape(200,200)
BX3 = BX2.reshape(200,200,2)
BY2 = BY1.reshape(200,200)
CX3 = CX2.reshape(200,200,2)
CY2 = CY1.reshape(200,200)
DX3 = DX2.reshape(200,200,2)
DY2 = DY1.reshape(200,200)

level25countA = np.zeros((200,200))
level50countA = np.zeros((200,200))
level75countA = np.zeros((200,200))

for i in range(200):
    for j in range(200):
        xval = int(np.floor(AX3[i][j][0]))
        yval = int(np.floor(AX3[i][j][1]))
        if (xval > 199 or yval > 199 or xval < 0 or yval < 0):
            continue;
        if AY2[i][j] == 2:
            level25countA[xval][yval] = level25countA[xval][yval] + 1;
        elif AY2[i][j] == 1:
            level50countA[xval][yval] = level50countA[xval][yval] + 1;
        elif AY2[i][j] == 0:
            level75countA[xval][yval] = level75countA[xval][yval] + 1;

for i in range(200):
    for j in range(200):
        xval = int(np.floor(BX3[i][j][0]))
        yval = int(np.floor(BX3[i][j][1]))
        if (xval > 199 or yval > 199 or xval < 0 or yval < 0):
            continue;
        if BY2[i][j] == 2:
            level25countA[xval][yval] = level25countA[xval][yval] + 1;
        elif BY2[i][j] == 1:
            level50countA[xval][yval] = level50countA[xval][yval] + 1;
        elif BY2[i][j] == 0:
            level75countA[xval][yval] = level75countA[xval][yval] + 1;

for i in range(200):
    for j in range(200):
        xval = int(np.floor(CX3[i][j][0]))
        yval = int(np.floor(CX3[i][j][1]))
        if (xval > 199 or yval > 199 or xval < 0 or yval < 0):
            continue;
        if CY2[i][j] == 2:
            level25countA[xval][yval] = level25countA[xval][yval] + 1;
        elif CY2[i][j] == 1:
            level50countA[xval][yval] = level50countA[xval][yval] + 1;
        elif CY2[i][j] == 0:
            level75countA[xval][yval] = level75countA[xval][yval] + 1;            
            
for i in range(200):
    for j in range(200):
        xval = int(np.floor(DX3[i][j][0]))
        yval = int(np.floor(DX3[i][j][1]))
        if (xval > 199 or yval > 199 or xval < 0 or yval < 0):
            continue;
        if DY2[i][j] == 2:
            level25countA[xval][yval] = level25countA[xval][yval] + 1;
        elif DY2[i][j] == 1:
            level50countA[xval][yval] = level50countA[xval][yval] + 1;
        elif DY2[i][j] == 0:
            level75countA[xval][yval] = level75countA[xval][yval] + 1;
            
outA = np.zeros((200,200))

for i in range(200):
    for j in range(200):
        if (xval > 199 or yval > 199):
            continue;
        if level25countA[i][j] ==0 and level50countA[i][j] == 0 and level75countA[i][j] == 0:
            continue;
        elif level75countA[i][j] > 0:
            outA[i][j] = 0.75;
        elif level50countA[i][j] > 0:
            outA[i][j] = 0.5;
        elif level25countA[i][j] > 0:
            outA[i][j] = 0.25;
            
outA2= outA.reshape(40000)
dfA = DataFrame(dict(A=outA2))
dfA.to_csv(r'E:\Research\CHI Project\Controlled Experiment\4 variables\Data\Ap3.csv')
